# `dataAwsccBedrockPromptVersion` Submodule <a name="`dataAwsccBedrockPromptVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockPromptVersion <a name="DataAwsccBedrockPromptVersion" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_prompt_version awscc_bedrock_prompt_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_prompt_version#id DataAwsccBedrockPromptVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockPromptVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockPromptVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockPromptVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockPromptVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_prompt_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockPromptVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.defaultVariant">default_variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.promptArn">prompt_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.promptId">prompt_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.variants">variants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList">DataAwsccBedrockPromptVersionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `customer_encryption_key_arn`<sup>Required</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

---

##### `default_variant`<sup>Required</sup> <a name="default_variant" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.defaultVariant"></a>

```python
default_variant: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prompt_arn`<sup>Required</sup> <a name="prompt_arn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.promptArn"></a>

```python
prompt_arn: str
```

- *Type:* str

---

##### `prompt_id`<sup>Required</sup> <a name="prompt_id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.promptId"></a>

```python
prompt_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `variants`<sup>Required</sup> <a name="variants" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.variants"></a>

```python
variants: DataAwsccBedrockPromptVersionVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList">DataAwsccBedrockPromptVersionVariantsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockPromptVersionConfig <a name="DataAwsccBedrockPromptVersionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_prompt_version#id DataAwsccBedrockPromptVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockPromptVersionVariants <a name="DataAwsccBedrockPromptVersionVariants" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariants.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariants()
```


### DataAwsccBedrockPromptVersionVariantsGenAiResource <a name="DataAwsccBedrockPromptVersionVariantsGenAiResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResource()
```


### DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent <a name="DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent()
```


### DataAwsccBedrockPromptVersionVariantsInferenceConfiguration <a name="DataAwsccBedrockPromptVersionVariantsInferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfiguration()
```


### DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText <a name="DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText()
```


### DataAwsccBedrockPromptVersionVariantsMetadata <a name="DataAwsccBedrockPromptVersionVariantsMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadata()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfiguration <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfiguration()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint()
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference <a name="DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.agentIdentifier">agent_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent">DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_identifier`<sup>Required</sup> <a name="agent_identifier" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```python
agent_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent">DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent</a>

---


### DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference <a name="DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference">DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResource">DataAwsccBedrockPromptVersionVariantsGenAiResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.agent"></a>

```python
agent: DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference">DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsGenAiResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResource">DataAwsccBedrockPromptVersionVariantsGenAiResource</a>

---


### DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference <a name="DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfiguration">DataAwsccBedrockPromptVersionVariantsInferenceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.text"></a>

```python
text: DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsInferenceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfiguration">DataAwsccBedrockPromptVersionVariantsInferenceConfiguration</a>

---


### DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference <a name="DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.stopSequences">stop_sequences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_sequences`<sup>Required</sup> <a name="stop_sequences" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```python
stop_sequences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText</a>

---


### DataAwsccBedrockPromptVersionVariantsList <a name="DataAwsccBedrockPromptVersionVariantsList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVersionVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVersionVariantsMetadataList <a name="DataAwsccBedrockPromptVersionVariantsMetadataList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVersionVariantsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVersionVariantsMetadataOutputReference <a name="DataAwsccBedrockPromptVersionVariantsMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadata">DataAwsccBedrockPromptVersionVariantsMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadata">DataAwsccBedrockPromptVersionVariantsMetadata</a>

---


### DataAwsccBedrockPromptVersionVariantsOutputReference <a name="DataAwsccBedrockPromptVersionVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.additionalModelRequestFields">additional_model_request_fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.genAiResource">gen_ai_resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference">DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.inferenceConfiguration">inference_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList">DataAwsccBedrockPromptVersionVariantsMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.templateType">template_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariants">DataAwsccBedrockPromptVersionVariants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_model_request_fields`<sup>Required</sup> <a name="additional_model_request_fields" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.additionalModelRequestFields"></a>

```python
additional_model_request_fields: str
```

- *Type:* str

---

##### `gen_ai_resource`<sup>Required</sup> <a name="gen_ai_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.genAiResource"></a>

```python
gen_ai_resource: DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference">DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference</a>

---

##### `inference_configuration`<sup>Required</sup> <a name="inference_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.inferenceConfiguration"></a>

```python
inference_configuration: DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.metadata"></a>

```python
metadata: DataAwsccBedrockPromptVersionVariantsMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList">DataAwsccBedrockPromptVersionVariantsMetadataList</a>

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.templateConfiguration"></a>

```python
template_configuration: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference</a>

---

##### `template_type`<sup>Required</sup> <a name="template_type" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.templateType"></a>

```python
template_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariants
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariants">DataAwsccBedrockPromptVersionVariants</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint"></a>

```python
cache_point: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.content"></a>

```python
content: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.systemAttribute">system_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration">tool_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.inputVariables"></a>

```python
input_variables: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList</a>

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.messages"></a>

```python
messages: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList</a>

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```python
system_attribute: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList</a>

---

##### `tool_configuration`<sup>Required</sup> <a name="tool_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```python
tool_configuration: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```python
cache_point: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">tool_choice</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_choice`<sup>Required</sup> <a name="tool_choice" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```python
tool_choice: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools"></a>

```python
tools: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">any</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">auto</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `any`<sup>Required</sup> <a name="any" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```python
any: str
```

- *Type:* str

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```python
auto: str
```

- *Type:* str

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```python
tool: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec">tool_spec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint"></a>

```python
cache_point: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a>

---

##### `tool_spec`<sup>Required</sup> <a name="tool_spec" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec"></a>

```python
tool_spec: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json">json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json"></a>

```python
json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema">input_schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_schema`<sup>Required</sup> <a name="input_schema" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema"></a>

```python
input_schema: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.chat">chat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfiguration">DataAwsccBedrockPromptVersionVariantsTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chat`<sup>Required</sup> <a name="chat" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.chat"></a>

```python
chat: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.text"></a>

```python
text: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfiguration">DataAwsccBedrockPromptVersionVariantsTemplateConfiguration</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_prompt_version

dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.cachePoint">cache_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_point`<sup>Required</sup> <a name="cache_point" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```python
cache_point: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference</a>

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```python
input_variables: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText</a>

---



