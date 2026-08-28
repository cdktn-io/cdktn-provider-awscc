# `dataAwsccEc2TransitGatewayMulticastDomain` Submodule <a name="`dataAwsccEc2TransitGatewayMulticastDomain` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayMulticastDomain <a name="DataAwsccEc2TransitGatewayMulticastDomain" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_multicast_domain awscc_ec2_transit_gateway_multicast_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_multicast_domain#id DataAwsccEc2TransitGatewayMulticastDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayMulticastDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayMulticastDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2TransitGatewayMulticastDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2TransitGatewayMulticastDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_multicast_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayMulticastDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference">DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList">DataAwsccEc2TransitGatewayMulticastDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainArn">transit_gateway_multicast_domain_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainId">transit_gateway_multicast_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.options"></a>

```python
options: DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference">DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.tags"></a>

```python
tags: DataAwsccEc2TransitGatewayMulticastDomainTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList">DataAwsccEc2TransitGatewayMulticastDomainTagsList</a>

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `transit_gateway_multicast_domain_arn`<sup>Required</sup> <a name="transit_gateway_multicast_domain_arn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainArn"></a>

```python
transit_gateway_multicast_domain_arn: str
```

- *Type:* str

---

##### `transit_gateway_multicast_domain_id`<sup>Required</sup> <a name="transit_gateway_multicast_domain_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainId"></a>

```python
transit_gateway_multicast_domain_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayMulticastDomainConfig <a name="DataAwsccEc2TransitGatewayMulticastDomainConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_multicast_domain#id DataAwsccEc2TransitGatewayMulticastDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayMulticastDomainOptions <a name="DataAwsccEc2TransitGatewayMulticastDomainOptions" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptions()
```


### DataAwsccEc2TransitGatewayMulticastDomainTags <a name="DataAwsccEc2TransitGatewayMulticastDomainTags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference <a name="DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.autoAcceptSharedAssociations">auto_accept_shared_associations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.igmpv2Support">igmpv2_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.staticSourcesSupport">static_sources_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptions">DataAwsccEc2TransitGatewayMulticastDomainOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_accept_shared_associations`<sup>Required</sup> <a name="auto_accept_shared_associations" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.autoAcceptSharedAssociations"></a>

```python
auto_accept_shared_associations: str
```

- *Type:* str

---

##### `igmpv2_support`<sup>Required</sup> <a name="igmpv2_support" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.igmpv2Support"></a>

```python
igmpv2_support: str
```

- *Type:* str

---

##### `static_sources_support`<sup>Required</sup> <a name="static_sources_support" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.staticSourcesSupport"></a>

```python
static_sources_support: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2TransitGatewayMulticastDomainOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainOptions">DataAwsccEc2TransitGatewayMulticastDomainOptions</a>

---


### DataAwsccEc2TransitGatewayMulticastDomainTagsList <a name="DataAwsccEc2TransitGatewayMulticastDomainTagsList" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference <a name="DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_multicast_domain

dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTags">DataAwsccEc2TransitGatewayMulticastDomainTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2TransitGatewayMulticastDomainTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMulticastDomain.DataAwsccEc2TransitGatewayMulticastDomainTags">DataAwsccEc2TransitGatewayMulticastDomainTags</a>

---



