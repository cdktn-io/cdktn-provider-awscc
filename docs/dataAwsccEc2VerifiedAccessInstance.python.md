# `dataAwsccEc2VerifiedAccessInstance` Submodule <a name="`dataAwsccEc2VerifiedAccessInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VerifiedAccessInstance <a name="DataAwsccEc2VerifiedAccessInstance" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_verified_access_instance awscc_ec2_verified_access_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_verified_access_instance#id DataAwsccEc2VerifiedAccessInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2VerifiedAccessInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2VerifiedAccessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_verified_access_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VerifiedAccessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain">cidr_endpoints_custom_sub_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers">cidr_endpoints_custom_sub_domain_name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.fipsEnabled">fips_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.loggingConfigurations">logging_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList">DataAwsccEc2VerifiedAccessInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessInstanceId">verified_access_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds">verified_access_trust_provider_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessTrustProviders">verified_access_trust_providers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cidr_endpoints_custom_sub_domain`<sup>Required</sup> <a name="cidr_endpoints_custom_sub_domain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain"></a>

```python
cidr_endpoints_custom_sub_domain: str
```

- *Type:* str

---

##### `cidr_endpoints_custom_sub_domain_name_servers`<sup>Required</sup> <a name="cidr_endpoints_custom_sub_domain_name_servers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers"></a>

```python
cidr_endpoints_custom_sub_domain_name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fips_enabled`<sup>Required</sup> <a name="fips_enabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.fipsEnabled"></a>

```python
fips_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `logging_configurations`<sup>Required</sup> <a name="logging_configurations" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.loggingConfigurations"></a>

```python
logging_configurations: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.tags"></a>

```python
tags: DataAwsccEc2VerifiedAccessInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList">DataAwsccEc2VerifiedAccessInstanceTagsList</a>

---

##### `verified_access_instance_id`<sup>Required</sup> <a name="verified_access_instance_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessInstanceId"></a>

```python
verified_access_instance_id: str
```

- *Type:* str

---

##### `verified_access_trust_provider_ids`<sup>Required</sup> <a name="verified_access_trust_provider_ids" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds"></a>

```python
verified_access_trust_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verified_access_trust_providers`<sup>Required</sup> <a name="verified_access_trust_providers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.verifiedAccessTrustProviders"></a>

```python
verified_access_trust_providers: DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VerifiedAccessInstanceConfig <a name="DataAwsccEc2VerifiedAccessInstanceConfig" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_verified_access_instance#id DataAwsccEc2VerifiedAccessInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations()
```


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs()
```


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose()
```


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3 <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3()
```


### DataAwsccEc2VerifiedAccessInstanceTags <a name="DataAwsccEc2VerifiedAccessInstanceTags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTags()
```


### DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders <a name="DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream`<sup>Required</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext">include_trust_context</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose">kinesis_data_firehose</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion">log_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a>

---

##### `include_trust_context`<sup>Required</sup> <a name="include_trust_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext"></a>

```python
include_trust_context: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kinesis_data_firehose`<sup>Required</sup> <a name="kinesis_data_firehose" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose"></a>

```python
kinesis_data_firehose: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a>

---

##### `log_version`<sup>Required</sup> <a name="log_version" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion"></a>

```python
log_version: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3"></a>

```python
s3: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurations</a>

---


### DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference <a name="DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3">DataAwsccEc2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---


### DataAwsccEc2VerifiedAccessInstanceTagsList <a name="DataAwsccEc2VerifiedAccessInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2VerifiedAccessInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2VerifiedAccessInstanceTagsOutputReference <a name="DataAwsccEc2VerifiedAccessInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTags">DataAwsccEc2VerifiedAccessInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessInstanceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceTags">DataAwsccEc2VerifiedAccessInstanceTags</a>

---


### DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList <a name="DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference <a name="DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_verified_access_instance

dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId">verified_access_trust_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders">DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_trust_provider_type`<sup>Required</sup> <a name="device_trust_provider_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType"></a>

```python
device_trust_provider_type: str
```

- *Type:* str

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

---

##### `user_trust_provider_type`<sup>Required</sup> <a name="user_trust_provider_type" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType"></a>

```python
user_trust_provider_type: str
```

- *Type:* str

---

##### `verified_access_trust_provider_id`<sup>Required</sup> <a name="verified_access_trust_provider_id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId"></a>

```python
verified_access_trust_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessInstance.DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders">DataAwsccEc2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>

---



