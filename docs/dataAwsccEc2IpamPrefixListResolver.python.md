# `dataAwsccEc2IpamPrefixListResolver` Submodule <a name="`dataAwsccEc2IpamPrefixListResolver` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamPrefixListResolver <a name="DataAwsccEc2IpamPrefixListResolver" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_ipam_prefix_list_resolver awscc_ec2_ipam_prefix_list_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_ipam_prefix_list_resolver#id DataAwsccEc2IpamPrefixListResolver#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamPrefixListResolver resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2IpamPrefixListResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2IpamPrefixListResolver to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2IpamPrefixListResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_ipam_prefix_list_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamPrefixListResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamArn">ipam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamId">ipam_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverArn">ipam_prefix_list_resolver_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverId">ipam_prefix_list_resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList">DataAwsccEc2IpamPrefixListResolverRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList">DataAwsccEc2IpamPrefixListResolverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ipam_arn`<sup>Required</sup> <a name="ipam_arn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamArn"></a>

```python
ipam_arn: str
```

- *Type:* str

---

##### `ipam_id`<sup>Required</sup> <a name="ipam_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamId"></a>

```python
ipam_id: str
```

- *Type:* str

---

##### `ipam_prefix_list_resolver_arn`<sup>Required</sup> <a name="ipam_prefix_list_resolver_arn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverArn"></a>

```python
ipam_prefix_list_resolver_arn: str
```

- *Type:* str

---

##### `ipam_prefix_list_resolver_id`<sup>Required</sup> <a name="ipam_prefix_list_resolver_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverId"></a>

```python
ipam_prefix_list_resolver_id: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.rules"></a>

```python
rules: DataAwsccEc2IpamPrefixListResolverRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList">DataAwsccEc2IpamPrefixListResolverRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tags"></a>

```python
tags: DataAwsccEc2IpamPrefixListResolverTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList">DataAwsccEc2IpamPrefixListResolverTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamPrefixListResolverConfig <a name="DataAwsccEc2IpamPrefixListResolverConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_ipam_prefix_list_resolver#id DataAwsccEc2IpamPrefixListResolver#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamPrefixListResolverRules <a name="DataAwsccEc2IpamPrefixListResolverRules" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules()
```


### DataAwsccEc2IpamPrefixListResolverRulesConditions <a name="DataAwsccEc2IpamPrefixListResolverRulesConditions" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions()
```


### DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag()
```


### DataAwsccEc2IpamPrefixListResolverTags <a name="DataAwsccEc2IpamPrefixListResolverTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamPrefixListResolverRulesConditionsList <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceOwner">resource_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceTag">resource_tag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions">DataAwsccEc2IpamPrefixListResolverRulesConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_owner`<sup>Required</sup> <a name="resource_owner" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceOwner"></a>

```python
resource_owner: str
```

- *Type:* str

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `resource_tag`<sup>Required</sup> <a name="resource_tag" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceTag"></a>

```python
resource_tag: DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamPrefixListResolverRulesConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions">DataAwsccEc2IpamPrefixListResolverRulesConditions</a>

---


### DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag</a>

---


### DataAwsccEc2IpamPrefixListResolverRulesList <a name="DataAwsccEc2IpamPrefixListResolverRulesList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2IpamPrefixListResolverRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2IpamPrefixListResolverRulesOutputReference <a name="DataAwsccEc2IpamPrefixListResolverRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList">DataAwsccEc2IpamPrefixListResolverRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ipamScopeId">ipam_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.staticCidr">static_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules">DataAwsccEc2IpamPrefixListResolverRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.conditions"></a>

```python
conditions: DataAwsccEc2IpamPrefixListResolverRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList">DataAwsccEc2IpamPrefixListResolverRulesConditionsList</a>

---

##### `ipam_scope_id`<sup>Required</sup> <a name="ipam_scope_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ipamScopeId"></a>

```python
ipam_scope_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `static_cidr`<sup>Required</sup> <a name="static_cidr" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.staticCidr"></a>

```python
static_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamPrefixListResolverRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules">DataAwsccEc2IpamPrefixListResolverRules</a>

---


### DataAwsccEc2IpamPrefixListResolverTagsList <a name="DataAwsccEc2IpamPrefixListResolverTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2IpamPrefixListResolverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2IpamPrefixListResolverTagsOutputReference <a name="DataAwsccEc2IpamPrefixListResolverTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_prefix_list_resolver

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags">DataAwsccEc2IpamPrefixListResolverTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamPrefixListResolverTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags">DataAwsccEc2IpamPrefixListResolverTags</a>

---



