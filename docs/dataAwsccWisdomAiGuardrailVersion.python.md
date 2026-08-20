# `dataAwsccWisdomAiGuardrailVersion` Submodule <a name="`dataAwsccWisdomAiGuardrailVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWisdomAiGuardrailVersion <a name="DataAwsccWisdomAiGuardrailVersion" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wisdom_ai_guardrail_version awscc_wisdom_ai_guardrail_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_guardrail_version

dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wisdom_ai_guardrail_version#id DataAwsccWisdomAiGuardrailVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWisdomAiGuardrailVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_guardrail_version

dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_guardrail_version

dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_guardrail_version

dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_guardrail_version

dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWisdomAiGuardrailVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWisdomAiGuardrailVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWisdomAiGuardrailVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wisdom_ai_guardrail_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWisdomAiGuardrailVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.aiGuardrailArn">ai_guardrail_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.aiGuardrailId">ai_guardrail_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.aiGuardrailVersionId">ai_guardrail_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.assistantArn">assistant_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.assistantId">assistant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.modifiedTimeSeconds">modified_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `ai_guardrail_arn`<sup>Required</sup> <a name="ai_guardrail_arn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.aiGuardrailArn"></a>

```python
ai_guardrail_arn: str
```

- *Type:* str

---

##### `ai_guardrail_id`<sup>Required</sup> <a name="ai_guardrail_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.aiGuardrailId"></a>

```python
ai_guardrail_id: str
```

- *Type:* str

---

##### `ai_guardrail_version_id`<sup>Required</sup> <a name="ai_guardrail_version_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.aiGuardrailVersionId"></a>

```python
ai_guardrail_version_id: str
```

- *Type:* str

---

##### `assistant_arn`<sup>Required</sup> <a name="assistant_arn" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.assistantArn"></a>

```python
assistant_arn: str
```

- *Type:* str

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.assistantId"></a>

```python
assistant_id: str
```

- *Type:* str

---

##### `modified_time_seconds`<sup>Required</sup> <a name="modified_time_seconds" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.modifiedTimeSeconds"></a>

```python
modified_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWisdomAiGuardrailVersionConfig <a name="DataAwsccWisdomAiGuardrailVersionConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_guardrail_version

dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiGuardrailVersion.DataAwsccWisdomAiGuardrailVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/wisdom_ai_guardrail_version#id DataAwsccWisdomAiGuardrailVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



