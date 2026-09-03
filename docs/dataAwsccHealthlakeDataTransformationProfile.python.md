# `dataAwsccHealthlakeDataTransformationProfile` Submodule <a name="`dataAwsccHealthlakeDataTransformationProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccHealthlakeDataTransformationProfile <a name="DataAwsccHealthlakeDataTransformationProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/healthlake_data_transformation_profile#id DataAwsccHealthlakeDataTransformationProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccHealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccHealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccHealthlakeDataTransformationProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccHealthlakeDataTransformationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/healthlake_data_transformation_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccHealthlakeDataTransformationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileDescription">profile_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.sourceFormat">source_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList">DataAwsccHealthlakeDataTransformationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.targetFormat">target_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `profile_description`<sup>Required</sup> <a name="profile_description" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileDescription"></a>

```python
profile_description: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.source"></a>

```python
source: DataAwsccHealthlakeDataTransformationProfileSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceOutputReference</a>

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tags"></a>

```python
tags: DataAwsccHealthlakeDataTransformationProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList">DataAwsccHealthlakeDataTransformationProfileTagsList</a>

---

##### `target_format`<sup>Required</sup> <a name="target_format" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.targetFormat"></a>

```python
target_format: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccHealthlakeDataTransformationProfileConfig <a name="DataAwsccHealthlakeDataTransformationProfileConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/healthlake_data_transformation_profile#id DataAwsccHealthlakeDataTransformationProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccHealthlakeDataTransformationProfileSource <a name="DataAwsccHealthlakeDataTransformationProfileSource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource()
```


### DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId <a name="DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId()
```


### DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping <a name="DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping()
```


### DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile <a name="DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile()
```


### DataAwsccHealthlakeDataTransformationProfileTags <a name="DataAwsccHealthlakeDataTransformationProfileTags" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId">existing_versioned_profile_id</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping">profile_mapping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile">starter_profile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource">DataAwsccHealthlakeDataTransformationProfileSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `existing_versioned_profile_id`<sup>Required</sup> <a name="existing_versioned_profile_id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId"></a>

```python
existing_versioned_profile_id: DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a>

---

##### `profile_mapping`<sup>Required</sup> <a name="profile_mapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping"></a>

```python
profile_mapping: DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a>

---

##### `starter_profile`<sup>Required</sup> <a name="starter_profile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile"></a>

```python
starter_profile: DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeDataTransformationProfileSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource">DataAwsccHealthlakeDataTransformationProfileSource</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping">profile_mapping</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping">DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `profile_mapping`<sup>Required</sup> <a name="profile_mapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping"></a>

```python
profile_mapping: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping">DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName">starter_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `starter_profile_name`<sup>Required</sup> <a name="starter_profile_name" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName"></a>

```python
starter_profile_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile</a>

---


### DataAwsccHealthlakeDataTransformationProfileTagsList <a name="DataAwsccHealthlakeDataTransformationProfileTagsList" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccHealthlakeDataTransformationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccHealthlakeDataTransformationProfileTagsOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_healthlake_data_transformation_profile

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags">DataAwsccHealthlakeDataTransformationProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccHealthlakeDataTransformationProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags">DataAwsccHealthlakeDataTransformationProfileTags</a>

---



