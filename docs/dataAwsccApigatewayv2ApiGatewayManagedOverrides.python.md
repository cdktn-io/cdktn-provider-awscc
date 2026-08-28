# `dataAwsccApigatewayv2ApiGatewayManagedOverrides` Submodule <a name="`dataAwsccApigatewayv2ApiGatewayManagedOverrides` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayv2ApiGatewayManagedOverrides <a name="DataAwsccApigatewayv2ApiGatewayManagedOverrides" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides awscc_apigatewayv2_api_gateway_managed_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides#id DataAwsccApigatewayv2ApiGatewayManagedOverrides#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayv2ApiGatewayManagedOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApigatewayv2ApiGatewayManagedOverrides resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApigatewayv2ApiGatewayManagedOverrides to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApigatewayv2ApiGatewayManagedOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayv2ApiGatewayManagedOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.apiGatewayManagedOverridesId">api_gateway_managed_overrides_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.route">route</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.stage">stage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `api_gateway_managed_overrides_id`<sup>Required</sup> <a name="api_gateway_managed_overrides_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.apiGatewayManagedOverridesId"></a>

```python
api_gateway_managed_overrides_id: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.integration"></a>

```python
integration: DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.route"></a>

```python
route: DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference</a>

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.stage"></a>

```python
stage: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverrides.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides#id DataAwsccApigatewayv2ApiGatewayManagedOverrides#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration()
```


### DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute()
```


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStage <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStage" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStage()
```


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings()
```


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings()
```


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.integrationMethod">integration_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.payloadFormatVersion">payload_format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration">DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `integration_method`<sup>Required</sup> <a name="integration_method" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.integrationMethod"></a>

```python
integration_method: str
```

- *Type:* str

---

##### `payload_format_version`<sup>Required</sup> <a name="payload_format_version" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.payloadFormatVersion"></a>

```python
payload_format_version: str
```

- *Type:* str

---

##### `timeout_in_millis`<sup>Required</sup> <a name="timeout_in_millis" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration">DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration</a>

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute">DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_scopes`<sup>Required</sup> <a name="authorization_scopes" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationScopes"></a>

```python
authorization_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute">DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute</a>

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a>

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled">detailed_metrics_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detailed_metrics_enabled`<sup>Required</sup> <a name="detailed_metrics_enabled" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```python
detailed_metrics_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `throttling_burst_limit`<sup>Required</sup> <a name="throttling_burst_limit" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit`<sup>Required</sup> <a name="throttling_rate_limit" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a>

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.accessLogSettings">access_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.autoDeploy">auto_deploy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.defaultRouteSettings">default_route_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.routeSettings">route_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.stageVariables">stage_variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStage">DataAwsccApigatewayv2ApiGatewayManagedOverridesStage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_log_settings`<sup>Required</sup> <a name="access_log_settings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.accessLogSettings"></a>

```python
access_log_settings: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference</a>

---

##### `auto_deploy`<sup>Required</sup> <a name="auto_deploy" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.autoDeploy"></a>

```python
auto_deploy: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `default_route_settings`<sup>Required</sup> <a name="default_route_settings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.defaultRouteSettings"></a>

```python
default_route_settings: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `route_settings`<sup>Required</sup> <a name="route_settings" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.routeSettings"></a>

```python
route_settings: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap</a>

---

##### `stage_variables`<sup>Required</sup> <a name="stage_variables" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.stageVariables"></a>

```python
stage_variables: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2ApiGatewayManagedOverridesStage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStage">DataAwsccApigatewayv2ApiGatewayManagedOverridesStage</a>

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference <a name="DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_api_gateway_managed_overrides

dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.detailedMetricsEnabled">detailed_metrics_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detailed_metrics_enabled`<sup>Required</sup> <a name="detailed_metrics_enabled" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```python
detailed_metrics_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `throttling_burst_limit`<sup>Required</sup> <a name="throttling_burst_limit" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit`<sup>Required</sup> <a name="throttling_rate_limit" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2ApiGatewayManagedOverrides.DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings">DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a>

---



