# `dataAwsccBedrockGuardrail` Submodule <a name="`dataAwsccBedrockGuardrail` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockGuardrail <a name="DataAwsccBedrockGuardrail" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_guardrail awscc_bedrock_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_guardrail#id DataAwsccBedrockGuardrail#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockGuardrail to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.automatedReasoningPolicyConfig">automated_reasoning_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference">DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.blockedInputMessaging">blocked_input_messaging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.blockedOutputsMessaging">blocked_outputs_messaging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.contentPolicyConfig">content_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference">DataAwsccBedrockGuardrailContentPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.contextualGroundingPolicyConfig">contextual_grounding_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.crossRegionConfig">cross_region_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference">DataAwsccBedrockGuardrailCrossRegionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.failureRecommendations">failure_recommendations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.guardrailArn">guardrail_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.guardrailId">guardrail_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.sensitiveInformationPolicyConfig">sensitive_information_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.statusReasons">status_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList">DataAwsccBedrockGuardrailTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.topicPolicyConfig">topic_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference">DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.wordPolicyConfig">word_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference">DataAwsccBedrockGuardrailWordPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `automated_reasoning_policy_config`<sup>Required</sup> <a name="automated_reasoning_policy_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.automatedReasoningPolicyConfig"></a>

```python
automated_reasoning_policy_config: DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference">DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference</a>

---

##### `blocked_input_messaging`<sup>Required</sup> <a name="blocked_input_messaging" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.blockedInputMessaging"></a>

```python
blocked_input_messaging: str
```

- *Type:* str

---

##### `blocked_outputs_messaging`<sup>Required</sup> <a name="blocked_outputs_messaging" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.blockedOutputsMessaging"></a>

```python
blocked_outputs_messaging: str
```

- *Type:* str

---

##### `content_policy_config`<sup>Required</sup> <a name="content_policy_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.contentPolicyConfig"></a>

```python
content_policy_config: DataAwsccBedrockGuardrailContentPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference">DataAwsccBedrockGuardrailContentPolicyConfigOutputReference</a>

---

##### `contextual_grounding_policy_config`<sup>Required</sup> <a name="contextual_grounding_policy_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.contextualGroundingPolicyConfig"></a>

```python
contextual_grounding_policy_config: DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `cross_region_config`<sup>Required</sup> <a name="cross_region_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.crossRegionConfig"></a>

```python
cross_region_config: DataAwsccBedrockGuardrailCrossRegionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference">DataAwsccBedrockGuardrailCrossRegionConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `failure_recommendations`<sup>Required</sup> <a name="failure_recommendations" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.failureRecommendations"></a>

```python
failure_recommendations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `guardrail_arn`<sup>Required</sup> <a name="guardrail_arn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.guardrailArn"></a>

```python
guardrail_arn: str
```

- *Type:* str

---

##### `guardrail_id`<sup>Required</sup> <a name="guardrail_id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.guardrailId"></a>

```python
guardrail_id: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitive_information_policy_config`<sup>Required</sup> <a name="sensitive_information_policy_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.sensitiveInformationPolicyConfig"></a>

```python
sensitive_information_policy_config: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reasons`<sup>Required</sup> <a name="status_reasons" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.statusReasons"></a>

```python
status_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.tags"></a>

```python
tags: DataAwsccBedrockGuardrailTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList">DataAwsccBedrockGuardrailTagsList</a>

---

##### `topic_policy_config`<sup>Required</sup> <a name="topic_policy_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.topicPolicyConfig"></a>

```python
topic_policy_config: DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference">DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `word_policy_config`<sup>Required</sup> <a name="word_policy_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.wordPolicyConfig"></a>

```python
word_policy_config: DataAwsccBedrockGuardrailWordPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference">DataAwsccBedrockGuardrailWordPolicyConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig <a name="DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig()
```


### DataAwsccBedrockGuardrailConfig <a name="DataAwsccBedrockGuardrailConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_guardrail#id DataAwsccBedrockGuardrail#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockGuardrailContentPolicyConfig <a name="DataAwsccBedrockGuardrailContentPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfig()
```


### DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig <a name="DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig()
```


### DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig <a name="DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig()
```


### DataAwsccBedrockGuardrailContextualGroundingPolicyConfig <a name="DataAwsccBedrockGuardrailContextualGroundingPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfig()
```


### DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig <a name="DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig()
```


### DataAwsccBedrockGuardrailCrossRegionConfig <a name="DataAwsccBedrockGuardrailCrossRegionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfig()
```


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig()
```


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig()
```


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig()
```


### DataAwsccBedrockGuardrailTags <a name="DataAwsccBedrockGuardrailTags" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTags()
```


### DataAwsccBedrockGuardrailTopicPolicyConfig <a name="DataAwsccBedrockGuardrailTopicPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfig()
```


### DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig <a name="DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig()
```


### DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig <a name="DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig()
```


### DataAwsccBedrockGuardrailWordPolicyConfig <a name="DataAwsccBedrockGuardrailWordPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfig()
```


### DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig <a name="DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig()
```


### DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig <a name="DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.confidenceThreshold">confidence_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig">DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_threshold`<sup>Required</sup> <a name="confidence_threshold" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.confidenceThreshold"></a>

```python
confidence_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig">DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig</a>

---


### DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference <a name="DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.tierName">tier_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig">DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tier_name`<sup>Required</sup> <a name="tier_name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.tierName"></a>

```python
tier_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig">DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig</a>

---


### DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList <a name="DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference <a name="DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputAction">input_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputEnabled">input_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputModalities">input_modalities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength">input_strength</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputAction">output_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputEnabled">output_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputModalities">output_modalities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength">output_strength</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig">DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_action`<sup>Required</sup> <a name="input_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputAction"></a>

```python
input_action: str
```

- *Type:* str

---

##### `input_enabled`<sup>Required</sup> <a name="input_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputEnabled"></a>

```python
input_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `input_modalities`<sup>Required</sup> <a name="input_modalities" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputModalities"></a>

```python
input_modalities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_strength`<sup>Required</sup> <a name="input_strength" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength"></a>

```python
input_strength: str
```

- *Type:* str

---

##### `output_action`<sup>Required</sup> <a name="output_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputAction"></a>

```python
output_action: str
```

- *Type:* str

---

##### `output_enabled`<sup>Required</sup> <a name="output_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputEnabled"></a>

```python
output_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `output_modalities`<sup>Required</sup> <a name="output_modalities" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputModalities"></a>

```python
output_modalities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_strength`<sup>Required</sup> <a name="output_strength" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength"></a>

```python
output_strength: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig">DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig</a>

---


### DataAwsccBedrockGuardrailContentPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailContentPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.contentFiltersTierConfig">content_filters_tier_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference">DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfig">filters_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList">DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfig">DataAwsccBedrockGuardrailContentPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_filters_tier_config`<sup>Required</sup> <a name="content_filters_tier_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.contentFiltersTierConfig"></a>

```python
content_filters_tier_config: DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference">DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference</a>

---

##### `filters_config`<sup>Required</sup> <a name="filters_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfig"></a>

```python
filters_config: DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList">DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailContentPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContentPolicyConfig">DataAwsccBedrockGuardrailContentPolicyConfig</a>

---


### DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList <a name="DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference <a name="DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig</a>

---


### DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig">filters_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfig">DataAwsccBedrockGuardrailContextualGroundingPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters_config`<sup>Required</sup> <a name="filters_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig"></a>

```python
filters_config: DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList">DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailContextualGroundingPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailContextualGroundingPolicyConfig">DataAwsccBedrockGuardrailContextualGroundingPolicyConfig</a>

---


### DataAwsccBedrockGuardrailCrossRegionConfigOutputReference <a name="DataAwsccBedrockGuardrailCrossRegionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileArn">guardrail_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfig">DataAwsccBedrockGuardrailCrossRegionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guardrail_profile_arn`<sup>Required</sup> <a name="guardrail_profile_arn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileArn"></a>

```python
guardrail_profile_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailCrossRegionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailCrossRegionConfig">DataAwsccBedrockGuardrailCrossRegionConfig</a>

---


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig">pii_entities_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig">regexes_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pii_entities_config`<sup>Required</sup> <a name="pii_entities_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig"></a>

```python
pii_entities_config: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a>

---

##### `regexes_config`<sup>Required</sup> <a name="regexes_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig"></a>

```python
regexes_config: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig</a>

---


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputAction">input_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabled">input_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputAction">output_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabled">output_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `input_action`<sup>Required</sup> <a name="input_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputAction"></a>

```python
input_action: str
```

- *Type:* str

---

##### `input_enabled`<sup>Required</sup> <a name="input_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabled"></a>

```python
input_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `output_action`<sup>Required</sup> <a name="output_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputAction"></a>

```python
output_action: str
```

- *Type:* str

---

##### `output_enabled`<sup>Required</sup> <a name="output_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabled"></a>

```python
output_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig</a>

---


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference <a name="DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputAction">input_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabled">input_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputAction">output_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabled">output_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_action`<sup>Required</sup> <a name="input_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputAction"></a>

```python
input_action: str
```

- *Type:* str

---

##### `input_enabled`<sup>Required</sup> <a name="input_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabled"></a>

```python
input_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_action`<sup>Required</sup> <a name="output_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputAction"></a>

```python
output_action: str
```

- *Type:* str

---

##### `output_enabled`<sup>Required</sup> <a name="output_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabled"></a>

```python
output_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig">DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig</a>

---


### DataAwsccBedrockGuardrailTagsList <a name="DataAwsccBedrockGuardrailTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockGuardrailTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockGuardrailTagsOutputReference <a name="DataAwsccBedrockGuardrailTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTags">DataAwsccBedrockGuardrailTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTags">DataAwsccBedrockGuardrailTags</a>

---


### DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfig">topics_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.topicsTierConfig">topics_tier_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfig">DataAwsccBedrockGuardrailTopicPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topics_config`<sup>Required</sup> <a name="topics_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfig"></a>

```python
topics_config: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList</a>

---

##### `topics_tier_config`<sup>Required</sup> <a name="topics_tier_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.topicsTierConfig"></a>

```python
topics_tier_config: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailTopicPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfig">DataAwsccBedrockGuardrailTopicPolicyConfig</a>

---


### DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList <a name="DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference <a name="DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples">examples</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputAction">input_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputEnabled">input_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputAction">output_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputEnabled">output_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples"></a>

```python
examples: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_action`<sup>Required</sup> <a name="input_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputAction"></a>

```python
input_action: str
```

- *Type:* str

---

##### `input_enabled`<sup>Required</sup> <a name="input_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.inputEnabled"></a>

```python
input_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_action`<sup>Required</sup> <a name="output_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputAction"></a>

```python
output_action: str
```

- *Type:* str

---

##### `output_enabled`<sup>Required</sup> <a name="output_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.outputEnabled"></a>

```python
output_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig</a>

---


### DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference <a name="DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.tierName">tier_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tier_name`<sup>Required</sup> <a name="tier_name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.tierName"></a>

```python
tier_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig">DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig</a>

---


### DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList <a name="DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference <a name="DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputAction">input_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabled">input_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputAction">output_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabled">output_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig">DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_action`<sup>Required</sup> <a name="input_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputAction"></a>

```python
input_action: str
```

- *Type:* str

---

##### `input_enabled`<sup>Required</sup> <a name="input_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabled"></a>

```python
input_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `output_action`<sup>Required</sup> <a name="output_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputAction"></a>

```python
output_action: str
```

- *Type:* str

---

##### `output_enabled`<sup>Required</sup> <a name="output_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabled"></a>

```python
output_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig">DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig</a>

---


### DataAwsccBedrockGuardrailWordPolicyConfigOutputReference <a name="DataAwsccBedrockGuardrailWordPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig">managed_word_lists_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList">DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfig">words_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList">DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfig">DataAwsccBedrockGuardrailWordPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_word_lists_config`<sup>Required</sup> <a name="managed_word_lists_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig"></a>

```python
managed_word_lists_config: DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList">DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList</a>

---

##### `words_config`<sup>Required</sup> <a name="words_config" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfig"></a>

```python
words_config: DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList">DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailWordPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfig">DataAwsccBedrockGuardrailWordPolicyConfig</a>

---


### DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList <a name="DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference <a name="DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_guardrail

dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputAction">input_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabled">input_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputAction">output_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabled">output_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig">DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_action`<sup>Required</sup> <a name="input_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputAction"></a>

```python
input_action: str
```

- *Type:* str

---

##### `input_enabled`<sup>Required</sup> <a name="input_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabled"></a>

```python
input_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `output_action`<sup>Required</sup> <a name="output_action" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputAction"></a>

```python
output_action: str
```

- *Type:* str

---

##### `output_enabled`<sup>Required</sup> <a name="output_enabled" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabled"></a>

```python
output_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockGuardrail.DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig">DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig</a>

---



