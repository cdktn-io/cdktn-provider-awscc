# `dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment` Submodule <a name="`dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/networkmanager_transit_gateway_route_table_attachment awscc_networkmanager_transit_gateway_route_table_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/networkmanager_transit_gateway_route_table_attachment#id DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/networkmanager_transit_gateway_route_table_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.edgeLocation">edge_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lastModificationErrors">last_modification_errors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.peeringId">peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedNetworkFunctionGroupChange">proposed_network_function_group_change</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedSegmentChange">proposed_segment_change</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.routingPolicyLabel">routing_policy_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.segmentName">segment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArn">transit_gateway_route_table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

---

##### `last_modification_errors`<sup>Required</sup> <a name="last_modification_errors" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lastModificationErrors"></a>

```python
last_modification_errors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_function_group_name`<sup>Required</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

---

##### `proposed_network_function_group_change`<sup>Required</sup> <a name="proposed_network_function_group_change" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedNetworkFunctionGroupChange"></a>

```python
proposed_network_function_group_change: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposed_segment_change`<sup>Required</sup> <a name="proposed_segment_change" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedSegmentChange"></a>

```python
proposed_segment_change: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `routing_policy_label`<sup>Required</sup> <a name="routing_policy_label" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.routingPolicyLabel"></a>

```python
routing_policy_label: str
```

- *Type:* str

---

##### `segment_name`<sup>Required</sup> <a name="segment_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tags"></a>

```python
tags: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList</a>

---

##### `transit_gateway_route_table_arn`<sup>Required</sup> <a name="transit_gateway_route_table_arn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArn"></a>

```python
transit_gateway_route_table_arn: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/networkmanager_transit_gateway_route_table_attachment#id DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange()
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags()
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange()
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags()
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_function_group_name`<sup>Required</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```python
tags: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.segmentName">segment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_name`<sup>Required</sup> <a name="segment_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```python
tags: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_transit_gateway_route_table_attachment

dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags</a>

---



