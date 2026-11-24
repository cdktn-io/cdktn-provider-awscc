# `dataAwsccEc2TransitGatewayNetworkFunctionAttachment` Submodule <a name="`dataAwsccEc2TransitGatewayNetworkFunctionAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayNetworkFunctionAttachment <a name="DataAwsccEc2TransitGatewayNetworkFunctionAttachment" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_transit_gateway_network_function_attachment awscc_ec2_transit_gateway_network_function_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_network_function_attachment

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_transit_gateway_network_function_attachment#id DataAwsccEc2TransitGatewayNetworkFunctionAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_network_function_attachment

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_network_function_attachment

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_network_function_attachment

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_network_function_attachment

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2TransitGatewayNetworkFunctionAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2TransitGatewayNetworkFunctionAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_transit_gateway_network_function_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayNetworkFunctionAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds">availability_zone_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList">DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `availability_zone_ids`<sup>Required</sup> <a name="availability_zone_ids" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds"></a>

```python
availability_zone_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.tags"></a>

```python
tags: DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList">DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList</a>

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig <a name="DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_network_function_attachment

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_transit_gateway_network_function_attachment#id DataAwsccEc2TransitGatewayNetworkFunctionAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags <a name="DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_network_function_attachment

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList <a name="DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_network_function_attachment

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference <a name="DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_network_function_attachment

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags">DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags">DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags</a>

---



