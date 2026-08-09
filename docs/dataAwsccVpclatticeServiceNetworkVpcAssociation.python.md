# `dataAwsccVpclatticeServiceNetworkVpcAssociation` Submodule <a name="`dataAwsccVpclatticeServiceNetworkVpcAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVpclatticeServiceNetworkVpcAssociation <a name="DataAwsccVpclatticeServiceNetworkVpcAssociation" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/vpclattice_service_network_vpc_association awscc_vpclattice_service_network_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/vpclattice_service_network_vpc_association#id DataAwsccVpclatticeServiceNetworkVpcAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkVpcAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkVpcAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccVpclatticeServiceNetworkVpcAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccVpclatticeServiceNetworkVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/vpclattice_service_network_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVpclatticeServiceNetworkVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.dnsOptions">dns_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference">DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.privateDnsEnabled">private_dns_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkId">service_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifier">service_network_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkName">service_network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkVpcAssociationId">service_network_vpc_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList">DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.vpcIdentifier">vpc_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `dns_options`<sup>Required</sup> <a name="dns_options" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.dnsOptions"></a>

```python
dns_options: DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference">DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference</a>

---

##### `private_dns_enabled`<sup>Required</sup> <a name="private_dns_enabled" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.privateDnsEnabled"></a>

```python
private_dns_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_network_arn`<sup>Required</sup> <a name="service_network_arn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkArn"></a>

```python
service_network_arn: str
```

- *Type:* str

---

##### `service_network_id`<sup>Required</sup> <a name="service_network_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkId"></a>

```python
service_network_id: str
```

- *Type:* str

---

##### `service_network_identifier`<sup>Required</sup> <a name="service_network_identifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifier"></a>

```python
service_network_identifier: str
```

- *Type:* str

---

##### `service_network_name`<sup>Required</sup> <a name="service_network_name" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkName"></a>

```python
service_network_name: str
```

- *Type:* str

---

##### `service_network_vpc_association_id`<sup>Required</sup> <a name="service_network_vpc_association_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkVpcAssociationId"></a>

```python
service_network_vpc_association_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.tags"></a>

```python
tags: DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList">DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `vpc_identifier`<sup>Required</sup> <a name="vpc_identifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.vpcIdentifier"></a>

```python
vpc_identifier: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVpclatticeServiceNetworkVpcAssociationConfig <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationConfig" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/vpclattice_service_network_vpc_association#id DataAwsccVpclatticeServiceNetworkVpcAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions()
```


### DataAwsccVpclatticeServiceNetworkVpcAssociationTags <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationTags" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsPreference">private_dns_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">private_dns_specified_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions">DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_dns_preference`<sup>Required</sup> <a name="private_dns_preference" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsPreference"></a>

```python
private_dns_preference: str
```

- *Type:* str

---

##### `private_dns_specified_domains`<sup>Required</sup> <a name="private_dns_specified_domains" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```python
private_dns_specified_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions">DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions</a>

---


### DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_service_network_vpc_association

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTags">DataAwsccVpclatticeServiceNetworkVpcAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeServiceNetworkVpcAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTags">DataAwsccVpclatticeServiceNetworkVpcAssociationTags</a>

---



