# `dataAwsccBedrockagentcoreOnlineEvaluationConfig` Submodule <a name="`dataAwsccBedrockagentcoreOnlineEvaluationConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreOnlineEvaluationConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_online_evaluation_config awscc_bedrockagentcore_online_evaluation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_online_evaluation_config#id DataAwsccBedrockagentcoreOnlineEvaluationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockagentcoreOnlineEvaluationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockagentcoreOnlineEvaluationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreOnlineEvaluationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.clusteringConfig">clustering_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig">data_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn">evaluation_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluators">evaluators</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.executionStatus">execution_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.insights">insights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn">online_evaluation_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId">online_evaluation_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName">online_evaluation_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.outputConfig">output_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `clustering_config`<sup>Required</sup> <a name="clustering_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.clusteringConfig"></a>

```python
clustering_config: DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data_source_config`<sup>Required</sup> <a name="data_source_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig"></a>

```python
data_source_config: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `evaluation_execution_role_arn`<sup>Required</sup> <a name="evaluation_execution_role_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn"></a>

```python
evaluation_execution_role_arn: str
```

- *Type:* str

---

##### `evaluators`<sup>Required</sup> <a name="evaluators" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluators"></a>

```python
evaluators: DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList</a>

---

##### `execution_status`<sup>Required</sup> <a name="execution_status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.executionStatus"></a>

```python
execution_status: str
```

- *Type:* str

---

##### `insights`<sup>Required</sup> <a name="insights" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.insights"></a>

```python
insights: DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList</a>

---

##### `online_evaluation_config_arn`<sup>Required</sup> <a name="online_evaluation_config_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn"></a>

```python
online_evaluation_config_arn: str
```

- *Type:* str

---

##### `online_evaluation_config_id`<sup>Required</sup> <a name="online_evaluation_config_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId"></a>

```python
online_evaluation_config_id: str
```

- *Type:* str

---

##### `online_evaluation_config_name`<sup>Required</sup> <a name="online_evaluation_config_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName"></a>

```python
online_evaluation_config_name: str
```

- *Type:* str

---

##### `output_config`<sup>Required</sup> <a name="output_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.outputConfig"></a>

```python
output_config: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.rule"></a>

```python
rule: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tags"></a>

```python
tags: DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_online_evaluation_config#id DataAwsccBedrockagentcoreOnlineEvaluationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRule <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig()
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigTags <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequencies">frequencies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequencies`<sup>Required</sup> <a name="frequencies" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequencies"></a>

```python
frequencies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames">log_group_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames">service_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_names`<sup>Required</sup> <a name="log_group_names" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames"></a>

```python
log_group_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_names`<sup>Required</sup> <a name="service_names" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames"></a>

```python
service_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorId">evaluator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluator_id`<sup>Required</sup> <a name="evaluator_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorId"></a>

```python
evaluator_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightId">insight_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insight_id`<sup>Required</sup> <a name="insight_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightId"></a>

```python
insight_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig">cloudwatch_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_config`<sup>Required</sup> <a name="cloudwatch_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig"></a>

```python
cloudwatch_config: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.value"></a>

```python
value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValue">boolean_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValue"></a>

```python
boolean_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig">sampling_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig">session_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule">DataAwsccBedrockagentcoreOnlineEvaluationConfigRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filters"></a>

```python
filters: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList</a>

---

##### `sampling_config`<sup>Required</sup> <a name="sampling_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig"></a>

```python
sampling_config: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference</a>

---

##### `session_config`<sup>Required</sup> <a name="session_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig"></a>

```python
session_config: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule">DataAwsccBedrockagentcoreOnlineEvaluationConfigRule</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sampling_percentage`<sup>Required</sup> <a name="sampling_percentage" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage"></a>

```python
sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `session_timeout_minutes`<sup>Required</sup> <a name="session_timeout_minutes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes"></a>

```python
session_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_online_evaluation_config

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags">DataAwsccBedrockagentcoreOnlineEvaluationConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreOnlineEvaluationConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags">DataAwsccBedrockagentcoreOnlineEvaluationConfigTags</a>

---



