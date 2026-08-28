# `dataAwsccBedrockagentcoreGatewayRateLimit` Submodule <a name="`dataAwsccBedrockagentcoreGatewayRateLimit` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreGatewayRateLimit <a name="DataAwsccBedrockagentcoreGatewayRateLimit" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_gateway_rate_limit awscc_bedrockagentcore_gateway_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_gateway_rate_limit#id DataAwsccBedrockagentcoreGatewayRateLimit#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockagentcoreGatewayRateLimit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockagentcoreGatewayRateLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_gateway_rate_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreGatewayRateLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.dimensionKeys">dimension_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.gatewayIdentifier">gateway_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.rateLimitId">rate_limit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dimension_keys`<sup>Required</sup> <a name="dimension_keys" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.dimensionKeys"></a>

```python
dimension_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.entries"></a>

```python
entries: DataAwsccBedrockagentcoreGatewayRateLimitEntriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesList</a>

---

##### `gateway_identifier`<sup>Required</sup> <a name="gateway_identifier" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.gatewayIdentifier"></a>

```python
gateway_identifier: str
```

- *Type:* str

---

##### `rate_limit_id`<sup>Required</sup> <a name="rate_limit_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.rateLimitId"></a>

```python
rate_limit_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreGatewayRateLimitConfig <a name="DataAwsccBedrockagentcoreGatewayRateLimitConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_gateway_rate_limit#id DataAwsccBedrockagentcoreGatewayRateLimit#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreGatewayRateLimitEntries <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntries" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntries.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntries()
```


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections()
```


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests()
```


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections">DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections">DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnections</a>

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesList <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions">dimensions</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens">tokens</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntries">DataAwsccBedrockagentcoreGatewayRateLimitEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections"></a>

```python
connections: DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesConnectionsList</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions"></a>

```python
dimensions: StringMap
```

- *Type:* cdktn.StringMap

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests"></a>

```python
requests: DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList</a>

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens"></a>

```python
tokens: DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList">DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreGatewayRateLimitEntries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntries">DataAwsccBedrockagentcoreGatewayRateLimitEntries</a>

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests">DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests">DataAwsccBedrockagentcoreGatewayRateLimitEntriesRequests</a>

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference <a name="DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_gateway_rate_limit

dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens">DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreGatewayRateLimit.DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens">DataAwsccBedrockagentcoreGatewayRateLimitEntriesTokens</a>

---



