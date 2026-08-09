# `dataAwsccImagebuilderInfrastructureConfiguration` Submodule <a name="`dataAwsccImagebuilderInfrastructureConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccImagebuilderInfrastructureConfiguration <a name="DataAwsccImagebuilderInfrastructureConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/imagebuilder_infrastructure_configuration awscc_imagebuilder_infrastructure_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/imagebuilder_infrastructure_configuration#id DataAwsccImagebuilderInfrastructureConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccImagebuilderInfrastructureConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccImagebuilderInfrastructureConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccImagebuilderInfrastructureConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccImagebuilderInfrastructureConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/imagebuilder_infrastructure_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccImagebuilderInfrastructureConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference">DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference">DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference">DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.resourceTags">resource_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure">terminate_instance_on_failure</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_metadata_options`<sup>Required</sup> <a name="instance_metadata_options" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions"></a>

```python
instance_metadata_options: DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference">DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference</a>

---

##### `instance_profile_name`<sup>Required</sup> <a name="instance_profile_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.instanceProfileName"></a>

```python
instance_profile_name: str
```

- *Type:* str

---

##### `instance_types`<sup>Required</sup> <a name="instance_types" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.logging"></a>

```python
logging: DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference">DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.placement"></a>

```python
placement: DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference">DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference</a>

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.resourceTags"></a>

```python
resource_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `terminate_instance_on_failure`<sup>Required</sup> <a name="terminate_instance_on_failure" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

```python
terminate_instance_on_failure: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccImagebuilderInfrastructureConfigurationConfig <a name="DataAwsccImagebuilderInfrastructureConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/imagebuilder_infrastructure_configuration#id DataAwsccImagebuilderInfrastructureConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptions <a name="DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptions" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptions()
```


### DataAwsccImagebuilderInfrastructureConfigurationLogging <a name="DataAwsccImagebuilderInfrastructureConfigurationLogging" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLogging.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLogging()
```


### DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs <a name="DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs()
```


### DataAwsccImagebuilderInfrastructureConfigurationPlacement <a name="DataAwsccImagebuilderInfrastructureConfigurationPlacement" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacement.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacement()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference <a name="DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptions">DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptions">DataAwsccImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---


### DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference <a name="DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs">s3_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference">DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLogging">DataAwsccImagebuilderInfrastructureConfigurationLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_logs`<sup>Required</sup> <a name="s3_logs" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs"></a>

```python
s3_logs: DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference">DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderInfrastructureConfigurationLogging
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLogging">DataAwsccImagebuilderInfrastructureConfigurationLogging</a>

---


### DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference <a name="DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs">DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs">DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---


### DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference <a name="DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_imagebuilder_infrastructure_configuration

dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacement">DataAwsccImagebuilderInfrastructureConfigurationPlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `host_resource_group_arn`<sup>Required</sup> <a name="host_resource_group_arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacementOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccImagebuilderInfrastructureConfigurationPlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderInfrastructureConfiguration.DataAwsccImagebuilderInfrastructureConfigurationPlacement">DataAwsccImagebuilderInfrastructureConfigurationPlacement</a>

---



