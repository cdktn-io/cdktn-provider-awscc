# `dataAwsccEc2VerifiedAccessTrustProvider` Submodule <a name="`dataAwsccEc2VerifiedAccessTrustProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VerifiedAccessTrustProvider <a name="DataAwsccEc2VerifiedAccessTrustProvider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_verified_access_trust_provider awscc_ec2_verified_access_trust_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_verified_access_trust_provider#id DataAwsccEc2VerifiedAccessTrustProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2VerifiedAccessTrustProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2VerifiedAccessTrustProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_verified_access_trust_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VerifiedAccessTrustProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceOptions">device_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions">native_application_oidc_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.oidcOptions">oidc_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.policyReferenceName">policy_reference_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList">DataAwsccEc2VerifiedAccessTrustProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId">verified_access_trust_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_options`<sup>Required</sup> <a name="device_options" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceOptions"></a>

```python
device_options: DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a>

---

##### `device_trust_provider_type`<sup>Required</sup> <a name="device_trust_provider_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceTrustProviderType"></a>

```python
device_trust_provider_type: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `native_application_oidc_options`<sup>Required</sup> <a name="native_application_oidc_options" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions"></a>

```python
native_application_oidc_options: DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a>

---

##### `oidc_options`<sup>Required</sup> <a name="oidc_options" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.oidcOptions"></a>

```python
oidc_options: DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference</a>

---

##### `policy_reference_name`<sup>Required</sup> <a name="policy_reference_name" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.policyReferenceName"></a>

```python
policy_reference_name: str
```

- *Type:* str

---

##### `sse_specification`<sup>Required</sup> <a name="sse_specification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.sseSpecification"></a>

```python
sse_specification: DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tags"></a>

```python
tags: DataAwsccEc2VerifiedAccessTrustProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList">DataAwsccEc2VerifiedAccessTrustProviderTagsList</a>

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

---

##### `user_trust_provider_type`<sup>Required</sup> <a name="user_trust_provider_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.userTrustProviderType"></a>

```python
user_trust_provider_type: str
```

- *Type:* str

---

##### `verified_access_trust_provider_id`<sup>Required</sup> <a name="verified_access_trust_provider_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId"></a>

```python
verified_access_trust_provider_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VerifiedAccessTrustProviderConfig <a name="DataAwsccEc2VerifiedAccessTrustProviderConfig" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_verified_access_trust_provider#id DataAwsccEc2VerifiedAccessTrustProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions <a name="DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions()
```


### DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions <a name="DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions()
```


### DataAwsccEc2VerifiedAccessTrustProviderOidcOptions <a name="DataAwsccEc2VerifiedAccessTrustProviderOidcOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions()
```


### DataAwsccEc2VerifiedAccessTrustProviderSseSpecification <a name="DataAwsccEc2VerifiedAccessTrustProviderSseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification()
```


### DataAwsccEc2VerifiedAccessTrustProviderTags <a name="DataAwsccEc2VerifiedAccessTrustProviderTags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl">public_signing_key_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_signing_key_url`<sup>Required</sup> <a name="public_signing_key_url" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl"></a>

```python
public_signing_key_url: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint">public_signing_key_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `public_signing_key_endpoint`<sup>Required</sup> <a name="public_signing_key_endpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint"></a>

```python
public_signing_key_endpoint: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderOidcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessTrustProviderOidcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderOidcOptions</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification">DataAwsccEc2VerifiedAccessTrustProviderSseSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_key_enabled`<sup>Required</sup> <a name="customer_managed_key_enabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessTrustProviderSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification">DataAwsccEc2VerifiedAccessTrustProviderSseSpecification</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderTagsList <a name="DataAwsccEc2VerifiedAccessTrustProviderTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_trust_provider

dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags">DataAwsccEc2VerifiedAccessTrustProviderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessTrustProviderTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags">DataAwsccEc2VerifiedAccessTrustProviderTags</a>

---



