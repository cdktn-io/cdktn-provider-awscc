# `dataAwsccEc2VerifiedAccessEndpoint` Submodule <a name="`dataAwsccEc2VerifiedAccessEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VerifiedAccessEndpoint <a name="DataAwsccEc2VerifiedAccessEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_verified_access_endpoint#id DataAwsccEc2VerifiedAccessEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2VerifiedAccessEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2VerifiedAccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VerifiedAccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.applicationDomain">application_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cidrOptions">cidr_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.deviceValidationDomain">device_validation_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.domainCertificateArn">domain_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomain">endpoint_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomainPrefix">endpoint_domain_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.loadBalancerOptions">load_balancer_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.networkInterfaceOptions">network_interface_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyEnabled">policy_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.rdsOptions">rds_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList">DataAwsccEc2VerifiedAccessEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessEndpointId">verified_access_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessGroupId">verified_access_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessInstanceId">verified_access_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `application_domain`<sup>Required</sup> <a name="application_domain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.applicationDomain"></a>

```python
application_domain: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `cidr_options`<sup>Required</sup> <a name="cidr_options" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cidrOptions"></a>

```python
cidr_options: DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_validation_domain`<sup>Required</sup> <a name="device_validation_domain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.deviceValidationDomain"></a>

```python
device_validation_domain: str
```

- *Type:* str

---

##### `domain_certificate_arn`<sup>Required</sup> <a name="domain_certificate_arn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.domainCertificateArn"></a>

```python
domain_certificate_arn: str
```

- *Type:* str

---

##### `endpoint_domain`<sup>Required</sup> <a name="endpoint_domain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomain"></a>

```python
endpoint_domain: str
```

- *Type:* str

---

##### `endpoint_domain_prefix`<sup>Required</sup> <a name="endpoint_domain_prefix" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomainPrefix"></a>

```python
endpoint_domain_prefix: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `load_balancer_options`<sup>Required</sup> <a name="load_balancer_options" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.loadBalancerOptions"></a>

```python
load_balancer_options: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `network_interface_options`<sup>Required</sup> <a name="network_interface_options" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.networkInterfaceOptions"></a>

```python
network_interface_options: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `policy_enabled`<sup>Required</sup> <a name="policy_enabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyEnabled"></a>

```python
policy_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `rds_options`<sup>Required</sup> <a name="rds_options" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.rdsOptions"></a>

```python
rds_options: DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference</a>

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sse_specification`<sup>Required</sup> <a name="sse_specification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.sseSpecification"></a>

```python
sse_specification: DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tags"></a>

```python
tags: DataAwsccEc2VerifiedAccessEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList">DataAwsccEc2VerifiedAccessEndpointTagsList</a>

---

##### `verified_access_endpoint_id`<sup>Required</sup> <a name="verified_access_endpoint_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessEndpointId"></a>

```python
verified_access_endpoint_id: str
```

- *Type:* str

---

##### `verified_access_group_id`<sup>Required</sup> <a name="verified_access_group_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessGroupId"></a>

```python
verified_access_group_id: str
```

- *Type:* str

---

##### `verified_access_instance_id`<sup>Required</sup> <a name="verified_access_instance_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessInstanceId"></a>

```python
verified_access_instance_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VerifiedAccessEndpointCidrOptions <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions()
```


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges()
```


### DataAwsccEc2VerifiedAccessEndpointConfig <a name="DataAwsccEc2VerifiedAccessEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_verified_access_endpoint#id DataAwsccEc2VerifiedAccessEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions()
```


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges()
```


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions()
```


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges()
```


### DataAwsccEc2VerifiedAccessEndpointRdsOptions <a name="DataAwsccEc2VerifiedAccessEndpointRdsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions()
```


### DataAwsccEc2VerifiedAccessEndpointSseSpecification <a name="DataAwsccEc2VerifiedAccessEndpointSseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification()
```


### DataAwsccEc2VerifiedAccessEndpointTags <a name="DataAwsccEc2VerifiedAccessEndpointTags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges">port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions">DataAwsccEc2VerifiedAccessEndpointCidrOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges"></a>

```python
port_ranges: DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessEndpointCidrOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions">DataAwsccEc2VerifiedAccessEndpointCidrOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges">port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges"></a>

```python
port_ranges: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges">port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges"></a>

```python
port_ranges: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn">rds_db_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn">rds_db_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn">rds_db_proxy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint">rds_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions">DataAwsccEc2VerifiedAccessEndpointRdsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rds_db_cluster_arn`<sup>Required</sup> <a name="rds_db_cluster_arn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn"></a>

```python
rds_db_cluster_arn: str
```

- *Type:* str

---

##### `rds_db_instance_arn`<sup>Required</sup> <a name="rds_db_instance_arn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn"></a>

```python
rds_db_instance_arn: str
```

- *Type:* str

---

##### `rds_db_proxy_arn`<sup>Required</sup> <a name="rds_db_proxy_arn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn"></a>

```python
rds_db_proxy_arn: str
```

- *Type:* str

---

##### `rds_endpoint`<sup>Required</sup> <a name="rds_endpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint"></a>

```python
rds_endpoint: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessEndpointRdsOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions">DataAwsccEc2VerifiedAccessEndpointRdsOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification">DataAwsccEc2VerifiedAccessEndpointSseSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_key_enabled`<sup>Required</sup> <a name="customer_managed_key_enabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessEndpointSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification">DataAwsccEc2VerifiedAccessEndpointSseSpecification</a>

---


### DataAwsccEc2VerifiedAccessEndpointTagsList <a name="DataAwsccEc2VerifiedAccessEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2VerifiedAccessEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2VerifiedAccessEndpointTagsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_endpoint

dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags">DataAwsccEc2VerifiedAccessEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags">DataAwsccEc2VerifiedAccessEndpointTags</a>

---



