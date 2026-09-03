# `dataAwsccEc2IpamExternalResourceVerificationToken` Submodule <a name="`dataAwsccEc2IpamExternalResourceVerificationToken` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamExternalResourceVerificationToken <a name="DataAwsccEc2IpamExternalResourceVerificationToken" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ipam_external_resource_verification_token awscc_ec2_ipam_external_resource_verification_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_external_resource_verification_token

dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ipam_external_resource_verification_token#id DataAwsccEc2IpamExternalResourceVerificationToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamExternalResourceVerificationToken resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_external_resource_verification_token

dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_external_resource_verification_token

dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_external_resource_verification_token

dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_external_resource_verification_token

dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2IpamExternalResourceVerificationToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2IpamExternalResourceVerificationToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2IpamExternalResourceVerificationToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ipam_external_resource_verification_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamExternalResourceVerificationToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamArn">ipam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenArn">ipam_external_resource_verification_token_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenId">ipam_external_resource_verification_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamId">ipam_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamRegion">ipam_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList">DataAwsccEc2IpamExternalResourceVerificationTokenTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tokenName">token_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tokenValue">token_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `ipam_arn`<sup>Required</sup> <a name="ipam_arn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamArn"></a>

```python
ipam_arn: str
```

- *Type:* str

---

##### `ipam_external_resource_verification_token_arn`<sup>Required</sup> <a name="ipam_external_resource_verification_token_arn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenArn"></a>

```python
ipam_external_resource_verification_token_arn: str
```

- *Type:* str

---

##### `ipam_external_resource_verification_token_id`<sup>Required</sup> <a name="ipam_external_resource_verification_token_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenId"></a>

```python
ipam_external_resource_verification_token_id: str
```

- *Type:* str

---

##### `ipam_id`<sup>Required</sup> <a name="ipam_id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamId"></a>

```python
ipam_id: str
```

- *Type:* str

---

##### `ipam_region`<sup>Required</sup> <a name="ipam_region" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.ipamRegion"></a>

```python
ipam_region: str
```

- *Type:* str

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tags"></a>

```python
tags: DataAwsccEc2IpamExternalResourceVerificationTokenTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList">DataAwsccEc2IpamExternalResourceVerificationTokenTagsList</a>

---

##### `token_name`<sup>Required</sup> <a name="token_name" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

---

##### `token_value`<sup>Required</sup> <a name="token_value" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamExternalResourceVerificationTokenConfig <a name="DataAwsccEc2IpamExternalResourceVerificationTokenConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_external_resource_verification_token

dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ipam_external_resource_verification_token#id DataAwsccEc2IpamExternalResourceVerificationToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamExternalResourceVerificationTokenTags <a name="DataAwsccEc2IpamExternalResourceVerificationTokenTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_external_resource_verification_token

dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamExternalResourceVerificationTokenTagsList <a name="DataAwsccEc2IpamExternalResourceVerificationTokenTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_external_resource_verification_token

dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference <a name="DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam_external_resource_verification_token

dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTags">DataAwsccEc2IpamExternalResourceVerificationTokenTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamExternalResourceVerificationTokenTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamExternalResourceVerificationToken.DataAwsccEc2IpamExternalResourceVerificationTokenTags">DataAwsccEc2IpamExternalResourceVerificationTokenTags</a>

---



