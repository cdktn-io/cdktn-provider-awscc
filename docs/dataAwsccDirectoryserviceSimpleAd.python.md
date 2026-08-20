# `dataAwsccDirectoryserviceSimpleAd` Submodule <a name="`dataAwsccDirectoryserviceSimpleAd` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectoryserviceSimpleAd <a name="DataAwsccDirectoryserviceSimpleAd" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/directoryservice_simple_ad awscc_directoryservice_simple_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/directoryservice_simple_ad#id DataAwsccDirectoryserviceSimpleAd#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDirectoryserviceSimpleAd to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDirectoryserviceSimpleAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/directoryservice_simple_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectoryserviceSimpleAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.createAlias">create_alias</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.dnsIpAddresses">dns_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.enableSso">enable_sso</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList">DataAwsccDirectoryserviceSimpleAdTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference">DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `create_alias`<sup>Required</sup> <a name="create_alias" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.createAlias"></a>

```python
create_alias: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `dns_ip_addresses`<sup>Required</sup> <a name="dns_ip_addresses" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.dnsIpAddresses"></a>

```python
dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_sso`<sup>Required</sup> <a name="enable_sso" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.enableSso"></a>

```python
enable_sso: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.tags"></a>

```python
tags: DataAwsccDirectoryserviceSimpleAdTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList">DataAwsccDirectoryserviceSimpleAdTagsList</a>

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.vpcSettings"></a>

```python
vpc_settings: DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference">DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectoryserviceSimpleAdConfig <a name="DataAwsccDirectoryserviceSimpleAdConfig" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/directoryservice_simple_ad#id DataAwsccDirectoryserviceSimpleAd#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectoryserviceSimpleAdTags <a name="DataAwsccDirectoryserviceSimpleAdTags" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTags()
```


### DataAwsccDirectoryserviceSimpleAdVpcSettings <a name="DataAwsccDirectoryserviceSimpleAdVpcSettings" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectoryserviceSimpleAdTagsList <a name="DataAwsccDirectoryserviceSimpleAdTagsList" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDirectoryserviceSimpleAdTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDirectoryserviceSimpleAdTagsOutputReference <a name="DataAwsccDirectoryserviceSimpleAdTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTags">DataAwsccDirectoryserviceSimpleAdTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDirectoryserviceSimpleAdTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTags">DataAwsccDirectoryserviceSimpleAdTags</a>

---


### DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference <a name="DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_directoryservice_simple_ad

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettings">DataAwsccDirectoryserviceSimpleAdVpcSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDirectoryserviceSimpleAdVpcSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettings">DataAwsccDirectoryserviceSimpleAdVpcSettings</a>

---



