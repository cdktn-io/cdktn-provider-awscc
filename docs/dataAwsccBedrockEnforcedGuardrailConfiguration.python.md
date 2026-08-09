# `dataAwsccBedrockEnforcedGuardrailConfiguration` Submodule <a name="`dataAwsccBedrockEnforcedGuardrailConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockEnforcedGuardrailConfiguration <a name="DataAwsccBedrockEnforcedGuardrailConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_enforced_guardrail_configuration awscc_bedrock_enforced_guardrail_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_enforced_guardrail_configuration

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_enforced_guardrail_configuration#id DataAwsccBedrockEnforcedGuardrailConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_enforced_guardrail_configuration

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_enforced_guardrail_configuration

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_enforced_guardrail_configuration

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_enforced_guardrail_configuration

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockEnforcedGuardrailConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockEnforcedGuardrailConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockEnforcedGuardrailConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailArn">guardrail_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailId">guardrail_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.modelEnforcement">model_enforcement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding">selective_content_guarding</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `guardrail_arn`<sup>Required</sup> <a name="guardrail_arn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailArn"></a>

```python
guardrail_arn: str
```

- *Type:* str

---

##### `guardrail_id`<sup>Required</sup> <a name="guardrail_id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailId"></a>

```python
guardrail_id: str
```

- *Type:* str

---

##### `guardrail_identifier`<sup>Required</sup> <a name="guardrail_identifier" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailIdentifier"></a>

```python
guardrail_identifier: str
```

- *Type:* str

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

---

##### `model_enforcement`<sup>Required</sup> <a name="model_enforcement" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.modelEnforcement"></a>

```python
model_enforcement: DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `selective_content_guarding`<sup>Required</sup> <a name="selective_content_guarding" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding"></a>

```python
selective_content_guarding: DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockEnforcedGuardrailConfigurationConfig <a name="DataAwsccBedrockEnforcedGuardrailConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_enforced_guardrail_configuration

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_enforced_guardrail_configuration#id DataAwsccBedrockEnforcedGuardrailConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement <a name="DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_enforced_guardrail_configuration

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement()
```


### DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding <a name="DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_enforced_guardrail_configuration

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference <a name="DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_enforced_guardrail_configuration

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels">excluded_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels">included_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_models`<sup>Required</sup> <a name="excluded_models" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels"></a>

```python
excluded_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_models`<sup>Required</sup> <a name="included_models" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels"></a>

```python
included_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement">DataAwsccBedrockEnforcedGuardrailConfigurationModelEnforcement</a>

---


### DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference <a name="DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_enforced_guardrail_configuration

dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages">messages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute">system_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages"></a>

```python
messages: str
```

- *Type:* str

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfiguration.DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">DataAwsccBedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

---



