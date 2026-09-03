# `dataAwsccPcaconnectorscepConnector` Submodule <a name="`dataAwsccPcaconnectorscepConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcaconnectorscepConnector <a name="DataAwsccPcaconnectorscepConnector" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/pcaconnectorscep_connector awscc_pcaconnectorscep_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/pcaconnectorscep_connector#id DataAwsccPcaconnectorscepConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccPcaconnectorscepConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccPcaconnectorscepConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccPcaconnectorscepConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccPcaconnectorscepConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/pcaconnectorscep_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcaconnectorscepConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.mobileDeviceManagement">mobile_device_management</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.openIdConfiguration">open_id_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference">DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `mobile_device_management`<sup>Required</sup> <a name="mobile_device_management" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.mobileDeviceManagement"></a>

```python
mobile_device_management: DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference</a>

---

##### `open_id_configuration`<sup>Required</sup> <a name="open_id_configuration" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.openIdConfiguration"></a>

```python
open_id_configuration: DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference">DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcaconnectorscepConnectorConfig <a name="DataAwsccPcaconnectorscepConnectorConfig" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/pcaconnectorscep_connector#id DataAwsccPcaconnectorscepConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPcaconnectorscepConnectorMobileDeviceManagement <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagement" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement()
```


### DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune()
```


### DataAwsccPcaconnectorscepConnectorOpenIdConfiguration <a name="DataAwsccPcaconnectorscepConnectorOpenIdConfiguration" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId">azure_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_application_id`<sup>Required</sup> <a name="azure_application_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId"></a>

```python
azure_application_id: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntune</a>

---


### DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference <a name="DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune">intune</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement">DataAwsccPcaconnectorscepConnectorMobileDeviceManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intune`<sup>Required</sup> <a name="intune" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune"></a>

```python
intune: DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">DataAwsccPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectorscepConnectorMobileDeviceManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorMobileDeviceManagement">DataAwsccPcaconnectorscepConnectorMobileDeviceManagement</a>

---


### DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference <a name="DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorscep_connector

dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration">DataAwsccPcaconnectorscepConnectorOpenIdConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectorscepConnectorOpenIdConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepConnector.DataAwsccPcaconnectorscepConnectorOpenIdConfiguration">DataAwsccPcaconnectorscepConnectorOpenIdConfiguration</a>

---



