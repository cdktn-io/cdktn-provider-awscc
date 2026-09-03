# `dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation` Submodule <a name="`dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation <a name="DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association awscc_ec2_local_gateway_route_table_virtual_interface_group_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_route_table_virtual_interface_group_association

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association#id DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_route_table_virtual_interface_group_association

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_route_table_virtual_interface_group_association

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_route_table_virtual_interface_group_association

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_route_table_virtual_interface_group_association

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableArn">local_gateway_route_table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableId">local_gateway_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableVirtualInterfaceGroupAssociationId">local_gateway_route_table_virtual_interface_group_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayVirtualInterfaceGroupId">local_gateway_virtual_interface_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList">DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

---

##### `local_gateway_route_table_arn`<sup>Required</sup> <a name="local_gateway_route_table_arn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableArn"></a>

```python
local_gateway_route_table_arn: str
```

- *Type:* str

---

##### `local_gateway_route_table_id`<sup>Required</sup> <a name="local_gateway_route_table_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableId"></a>

```python
local_gateway_route_table_id: str
```

- *Type:* str

---

##### `local_gateway_route_table_virtual_interface_group_association_id`<sup>Required</sup> <a name="local_gateway_route_table_virtual_interface_group_association_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableVirtualInterfaceGroupAssociationId"></a>

```python
local_gateway_route_table_virtual_interface_group_association_id: str
```

- *Type:* str

---

##### `local_gateway_virtual_interface_group_id`<sup>Required</sup> <a name="local_gateway_virtual_interface_group_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayVirtualInterfaceGroupId"></a>

```python
local_gateway_virtual_interface_group_id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tags"></a>

```python
tags: DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList">DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig <a name="DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_route_table_virtual_interface_group_association

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association#id DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags <a name="DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_route_table_virtual_interface_group_association

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList <a name="DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_route_table_virtual_interface_group_association

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference <a name="DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_local_gateway_route_table_virtual_interface_group_association

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags">DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags">DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags</a>

---



