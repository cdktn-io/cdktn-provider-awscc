# `dataAwsccEc2IpamResourceDiscovery` Submodule <a name="`dataAwsccEc2IpamResourceDiscovery` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamResourceDiscovery <a name="DataAwsccEc2IpamResourceDiscovery" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_ipam_resource_discovery awscc_ec2_ipam_resource_discovery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_ipam_resource_discovery#id DataAwsccEc2IpamResourceDiscovery#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamResourceDiscovery resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2IpamResourceDiscovery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2IpamResourceDiscovery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2IpamResourceDiscovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_ipam_resource_discovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamResourceDiscovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryArn">ipam_resource_discovery_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryId">ipam_resource_discovery_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryRegion">ipam_resource_discovery_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.operatingRegions">operating_regions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList">DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.organizationalUnitExclusions">organizational_unit_exclusions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList">DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList">DataAwsccEc2IpamResourceDiscoveryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ipam_resource_discovery_arn`<sup>Required</sup> <a name="ipam_resource_discovery_arn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryArn"></a>

```python
ipam_resource_discovery_arn: str
```

- *Type:* str

---

##### `ipam_resource_discovery_id`<sup>Required</sup> <a name="ipam_resource_discovery_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryId"></a>

```python
ipam_resource_discovery_id: str
```

- *Type:* str

---

##### `ipam_resource_discovery_region`<sup>Required</sup> <a name="ipam_resource_discovery_region" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ipamResourceDiscoveryRegion"></a>

```python
ipam_resource_discovery_region: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `operating_regions`<sup>Required</sup> <a name="operating_regions" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.operatingRegions"></a>

```python
operating_regions: DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList">DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList</a>

---

##### `organizational_unit_exclusions`<sup>Required</sup> <a name="organizational_unit_exclusions" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.organizationalUnitExclusions"></a>

```python
organizational_unit_exclusions: DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList">DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList</a>

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.tags"></a>

```python
tags: DataAwsccEc2IpamResourceDiscoveryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList">DataAwsccEc2IpamResourceDiscoveryTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscovery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamResourceDiscoveryConfig <a name="DataAwsccEc2IpamResourceDiscoveryConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_ipam_resource_discovery#id DataAwsccEc2IpamResourceDiscovery#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamResourceDiscoveryOperatingRegions <a name="DataAwsccEc2IpamResourceDiscoveryOperatingRegions" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegions()
```


### DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions <a name="DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions()
```


### DataAwsccEc2IpamResourceDiscoveryTags <a name="DataAwsccEc2IpamResourceDiscoveryTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList <a name="DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference <a name="DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegions">DataAwsccEc2IpamResourceDiscoveryOperatingRegions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamResourceDiscoveryOperatingRegions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOperatingRegions">DataAwsccEc2IpamResourceDiscoveryOperatingRegions</a>

---


### DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList <a name="DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference <a name="DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath">organizations_entity_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions">DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `organizations_entity_path`<sup>Required</sup> <a name="organizations_entity_path" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath"></a>

```python
organizations_entity_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions">DataAwsccEc2IpamResourceDiscoveryOrganizationalUnitExclusions</a>

---


### DataAwsccEc2IpamResourceDiscoveryTagsList <a name="DataAwsccEc2IpamResourceDiscoveryTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2IpamResourceDiscoveryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2IpamResourceDiscoveryTagsOutputReference <a name="DataAwsccEc2IpamResourceDiscoveryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_resource_discovery

dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTags">DataAwsccEc2IpamResourceDiscoveryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamResourceDiscoveryTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscovery.DataAwsccEc2IpamResourceDiscoveryTags">DataAwsccEc2IpamResourceDiscoveryTags</a>

---



