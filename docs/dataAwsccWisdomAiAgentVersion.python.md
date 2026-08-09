# `dataAwsccWisdomAiAgentVersion` Submodule <a name="`dataAwsccWisdomAiAgentVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWisdomAiAgentVersion <a name="DataAwsccWisdomAiAgentVersion" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/wisdom_ai_agent_version awscc_wisdom_ai_agent_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_agent_version

dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/wisdom_ai_agent_version#id DataAwsccWisdomAiAgentVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWisdomAiAgentVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_agent_version

dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_agent_version

dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_agent_version

dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_agent_version

dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWisdomAiAgentVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWisdomAiAgentVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWisdomAiAgentVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/wisdom_ai_agent_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWisdomAiAgentVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.aiAgentArn">ai_agent_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.aiAgentId">ai_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.aiAgentVersionId">ai_agent_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.assistantArn">assistant_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.assistantId">assistant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.modifiedTimeSeconds">modified_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `ai_agent_arn`<sup>Required</sup> <a name="ai_agent_arn" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.aiAgentArn"></a>

```python
ai_agent_arn: str
```

- *Type:* str

---

##### `ai_agent_id`<sup>Required</sup> <a name="ai_agent_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.aiAgentId"></a>

```python
ai_agent_id: str
```

- *Type:* str

---

##### `ai_agent_version_id`<sup>Required</sup> <a name="ai_agent_version_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.aiAgentVersionId"></a>

```python
ai_agent_version_id: str
```

- *Type:* str

---

##### `assistant_arn`<sup>Required</sup> <a name="assistant_arn" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.assistantArn"></a>

```python
assistant_arn: str
```

- *Type:* str

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.assistantId"></a>

```python
assistant_id: str
```

- *Type:* str

---

##### `modified_time_seconds`<sup>Required</sup> <a name="modified_time_seconds" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.modifiedTimeSeconds"></a>

```python
modified_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWisdomAiAgentVersionConfig <a name="DataAwsccWisdomAiAgentVersionConfig" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_ai_agent_version

dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomAiAgentVersion.DataAwsccWisdomAiAgentVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/wisdom_ai_agent_version#id DataAwsccWisdomAiAgentVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



