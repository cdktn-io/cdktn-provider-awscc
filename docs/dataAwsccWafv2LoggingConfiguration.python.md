# `dataAwsccWafv2LoggingConfiguration` Submodule <a name="`dataAwsccWafv2LoggingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWafv2LoggingConfiguration <a name="DataAwsccWafv2LoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wafv2_logging_configuration awscc_wafv2_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wafv2_logging_configuration#id DataAwsccWafv2LoggingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWafv2LoggingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWafv2LoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wafv2_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWafv2LoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.logDestinationConfigs">log_destination_configs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.loggingFilter">logging_filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.managedByFirewallManager">managed_by_firewall_manager</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.redactedFields">redacted_fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList">DataAwsccWafv2LoggingConfigurationRedactedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `log_destination_configs`<sup>Required</sup> <a name="log_destination_configs" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.logDestinationConfigs"></a>

```python
log_destination_configs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_filter`<sup>Required</sup> <a name="logging_filter" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.loggingFilter"></a>

```python
logging_filter: DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference</a>

---

##### `managed_by_firewall_manager`<sup>Required</sup> <a name="managed_by_firewall_manager" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.managedByFirewallManager"></a>

```python
managed_by_firewall_manager: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `redacted_fields`<sup>Required</sup> <a name="redacted_fields" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.redactedFields"></a>

```python
redacted_fields: DataAwsccWafv2LoggingConfigurationRedactedFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList">DataAwsccWafv2LoggingConfigurationRedactedFieldsList</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWafv2LoggingConfigurationConfig <a name="DataAwsccWafv2LoggingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wafv2_logging_configuration#id DataAwsccWafv2LoggingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWafv2LoggingConfigurationLoggingFilter <a name="DataAwsccWafv2LoggingConfigurationLoggingFilter" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter()
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFilters <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFilters" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters()
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions()
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition()
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition()
```


### DataAwsccWafv2LoggingConfigurationRedactedFields <a name="DataAwsccWafv2LoggingConfigurationRedactedFields" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields()
```


### DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName">label_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_name`<sup>Required</sup> <a name="label_name" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName"></a>

```python
label_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition">action_condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition">label_name_condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_condition`<sup>Required</sup> <a name="action_condition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition"></a>

```python
action_condition: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a>

---

##### `label_name_condition`<sup>Required</sup> <a name="label_name_condition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition"></a>

```python
label_name_condition: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior">behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement">requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters">DataAwsccWafv2LoggingConfigurationLoggingFilterFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions"></a>

```python
conditions: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a>

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWafv2LoggingConfigurationLoggingFilterFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters">DataAwsccWafv2LoggingConfigurationLoggingFilterFilters</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior">default_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter">DataAwsccWafv2LoggingConfigurationLoggingFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_behavior`<sup>Required</sup> <a name="default_behavior" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior"></a>

```python
default_behavior: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.filters"></a>

```python
filters: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWafv2LoggingConfigurationLoggingFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter">DataAwsccWafv2LoggingConfigurationLoggingFilter</a>

---


### DataAwsccWafv2LoggingConfigurationRedactedFieldsList <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsList" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader">single_header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath">uri_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields">DataAwsccWafv2LoggingConfigurationRedactedFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `single_header`<sup>Required</sup> <a name="single_header" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader"></a>

```python
single_header: DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a>

---

##### `uri_path`<sup>Required</sup> <a name="uri_path" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath"></a>

```python
uri_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWafv2LoggingConfigurationRedactedFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields">DataAwsccWafv2LoggingConfigurationRedactedFields</a>

---


### DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wafv2_logging_configuration

dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

---



