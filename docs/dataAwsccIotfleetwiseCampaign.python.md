# `dataAwsccIotfleetwiseCampaign` Submodule <a name="`dataAwsccIotfleetwiseCampaign` Submodule" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotfleetwiseCampaign <a name="DataAwsccIotfleetwiseCampaign" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotfleetwise_campaign awscc_iotfleetwise_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotfleetwise_campaign#id DataAwsccIotfleetwiseCampaign#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotfleetwiseCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotfleetwiseCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotfleetwiseCampaign to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotfleetwiseCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotfleetwise_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotfleetwiseCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.collectionScheme">collection_scheme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference">DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.dataDestinationConfigs">data_destination_configs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList">DataAwsccIotfleetwiseCampaignDataDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.dataExtraDimensions">data_extra_dimensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.dataPartitions">data_partitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList">DataAwsccIotfleetwiseCampaignDataPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.diagnosticsMode">diagnostics_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.expiryTime">expiry_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.lastModificationTime">last_modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.postTriggerCollectionDuration">post_trigger_collection_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.signalCatalogArn">signal_catalog_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.signalsToCollect">signals_to_collect</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList">DataAwsccIotfleetwiseCampaignSignalsToCollectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.signalsToFetch">signals_to_fetch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList">DataAwsccIotfleetwiseCampaignSignalsToFetchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.spoolingMode">spooling_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList">DataAwsccIotfleetwiseCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collection_scheme`<sup>Required</sup> <a name="collection_scheme" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.collectionScheme"></a>

```python
collection_scheme: DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference">DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference</a>

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `data_destination_configs`<sup>Required</sup> <a name="data_destination_configs" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.dataDestinationConfigs"></a>

```python
data_destination_configs: DataAwsccIotfleetwiseCampaignDataDestinationConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList">DataAwsccIotfleetwiseCampaignDataDestinationConfigsList</a>

---

##### `data_extra_dimensions`<sup>Required</sup> <a name="data_extra_dimensions" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.dataExtraDimensions"></a>

```python
data_extra_dimensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_partitions`<sup>Required</sup> <a name="data_partitions" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.dataPartitions"></a>

```python
data_partitions: DataAwsccIotfleetwiseCampaignDataPartitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList">DataAwsccIotfleetwiseCampaignDataPartitionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `diagnostics_mode`<sup>Required</sup> <a name="diagnostics_mode" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.diagnosticsMode"></a>

```python
diagnostics_mode: str
```

- *Type:* str

---

##### `expiry_time`<sup>Required</sup> <a name="expiry_time" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.expiryTime"></a>

```python
expiry_time: str
```

- *Type:* str

---

##### `last_modification_time`<sup>Required</sup> <a name="last_modification_time" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.lastModificationTime"></a>

```python
last_modification_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `post_trigger_collection_duration`<sup>Required</sup> <a name="post_trigger_collection_duration" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.postTriggerCollectionDuration"></a>

```python
post_trigger_collection_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signal_catalog_arn`<sup>Required</sup> <a name="signal_catalog_arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.signalCatalogArn"></a>

```python
signal_catalog_arn: str
```

- *Type:* str

---

##### `signals_to_collect`<sup>Required</sup> <a name="signals_to_collect" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.signalsToCollect"></a>

```python
signals_to_collect: DataAwsccIotfleetwiseCampaignSignalsToCollectList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList">DataAwsccIotfleetwiseCampaignSignalsToCollectList</a>

---

##### `signals_to_fetch`<sup>Required</sup> <a name="signals_to_fetch" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.signalsToFetch"></a>

```python
signals_to_fetch: DataAwsccIotfleetwiseCampaignSignalsToFetchList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList">DataAwsccIotfleetwiseCampaignSignalsToFetchList</a>

---

##### `spooling_mode`<sup>Required</sup> <a name="spooling_mode" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.spoolingMode"></a>

```python
spooling_mode: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.tags"></a>

```python
tags: DataAwsccIotfleetwiseCampaignTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList">DataAwsccIotfleetwiseCampaignTagsList</a>

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaign.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotfleetwiseCampaignCollectionScheme <a name="DataAwsccIotfleetwiseCampaignCollectionScheme" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionScheme.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionScheme()
```


### DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme <a name="DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme()
```


### DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme <a name="DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme()
```


### DataAwsccIotfleetwiseCampaignConfig <a name="DataAwsccIotfleetwiseCampaignConfig" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotfleetwise_campaign#id DataAwsccIotfleetwiseCampaign#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotfleetwiseCampaignDataDestinationConfigs <a name="DataAwsccIotfleetwiseCampaignDataDestinationConfigs" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigs()
```


### DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig <a name="DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig()
```


### DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config <a name="DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config()
```


### DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig <a name="DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig()
```


### DataAwsccIotfleetwiseCampaignDataPartitions <a name="DataAwsccIotfleetwiseCampaignDataPartitions" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitions()
```


### DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions <a name="DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions()
```


### DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize <a name="DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize()
```


### DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive <a name="DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive()
```


### DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions <a name="DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions()
```


### DataAwsccIotfleetwiseCampaignSignalsToCollect <a name="DataAwsccIotfleetwiseCampaignSignalsToCollect" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollect.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollect()
```


### DataAwsccIotfleetwiseCampaignSignalsToFetch <a name="DataAwsccIotfleetwiseCampaignSignalsToFetch" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetch()
```


### DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig <a name="DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig()
```


### DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased <a name="DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased()
```


### DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased <a name="DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased()
```


### DataAwsccIotfleetwiseCampaignTags <a name="DataAwsccIotfleetwiseCampaignTags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference <a name="DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion">condition_language_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs">minimum_trigger_interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode">trigger_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_language_version`<sup>Required</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.conditionLanguageVersion"></a>

```python
condition_language_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `minimum_trigger_interval_ms`<sup>Required</sup> <a name="minimum_trigger_interval_ms" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.minimumTriggerIntervalMs"></a>

```python
minimum_trigger_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_mode`<sup>Required</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme">DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionScheme</a>

---


### DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference <a name="DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme">condition_based_collection_scheme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme">time_based_collection_scheme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionScheme">DataAwsccIotfleetwiseCampaignCollectionScheme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_based_collection_scheme`<sup>Required</sup> <a name="condition_based_collection_scheme" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.property.conditionBasedCollectionScheme"></a>

```python
condition_based_collection_scheme: DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference">DataAwsccIotfleetwiseCampaignCollectionSchemeConditionBasedCollectionSchemeOutputReference</a>

---

##### `time_based_collection_scheme`<sup>Required</sup> <a name="time_based_collection_scheme" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.property.timeBasedCollectionScheme"></a>

```python
time_based_collection_scheme: DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference">DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignCollectionScheme
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionScheme">DataAwsccIotfleetwiseCampaignCollectionScheme</a>

---


### DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference <a name="DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs">period_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_ms`<sup>Required</sup> <a name="period_ms" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.periodMs"></a>

```python
period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionSchemeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme">DataAwsccIotfleetwiseCampaignCollectionSchemeTimeBasedCollectionScheme</a>

---


### DataAwsccIotfleetwiseCampaignDataDestinationConfigsList <a name="DataAwsccIotfleetwiseCampaignDataDestinationConfigsList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference <a name="DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn">mqtt_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `mqtt_topic_arn`<sup>Required</sup> <a name="mqtt_topic_arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.mqttTopicArn"></a>

```python
mqtt_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig">DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfig</a>

---


### DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference <a name="DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig">mqtt_topic_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config">s3_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig">timestream_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigs">DataAwsccIotfleetwiseCampaignDataDestinationConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mqtt_topic_config`<sup>Required</sup> <a name="mqtt_topic_config" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.mqttTopicConfig"></a>

```python
mqtt_topic_config: DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference">DataAwsccIotfleetwiseCampaignDataDestinationConfigsMqttTopicConfigOutputReference</a>

---

##### `s3_config`<sup>Required</sup> <a name="s3_config" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.s3Config"></a>

```python
s3_config: DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference">DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference</a>

---

##### `timestream_config`<sup>Required</sup> <a name="timestream_config" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.timestreamConfig"></a>

```python
timestream_config: DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference">DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignDataDestinationConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigs">DataAwsccIotfleetwiseCampaignDataDestinationConfigs</a>

---


### DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference <a name="DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat">data_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat">storage_compression_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config">DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `data_format`<sup>Required</sup> <a name="data_format" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `storage_compression_format`<sup>Required</sup> <a name="storage_compression_format" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.storageCompressionFormat"></a>

```python
storage_compression_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3ConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config">DataAwsccIotfleetwiseCampaignDataDestinationConfigsS3Config</a>

---


### DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference <a name="DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn">timestream_table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `timestream_table_arn`<sup>Required</sup> <a name="timestream_table_arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.timestreamTableArn"></a>

```python
timestream_table_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig">DataAwsccIotfleetwiseCampaignDataDestinationConfigsTimestreamConfig</a>

---


### DataAwsccIotfleetwiseCampaignDataPartitionsList <a name="DataAwsccIotfleetwiseCampaignDataPartitionsList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference <a name="DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions">storage_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions">upload_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitions">DataAwsccIotfleetwiseCampaignDataPartitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_options`<sup>Required</sup> <a name="storage_options" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.storageOptions"></a>

```python
storage_options: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference</a>

---

##### `upload_options`<sup>Required</sup> <a name="upload_options" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.uploadOptions"></a>

```python
upload_options: DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference">DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignDataPartitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitions">DataAwsccIotfleetwiseCampaignDataPartitions</a>

---


### DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference <a name="DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSize</a>

---


### DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference <a name="DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLive</a>

---


### DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference <a name="DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize">maximum_size</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive">minimum_time_to_live</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_size`<sup>Required</sup> <a name="maximum_size" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.maximumSize"></a>

```python
maximum_size: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMaximumSizeOutputReference</a>

---

##### `minimum_time_to_live`<sup>Required</sup> <a name="minimum_time_to_live" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.minimumTimeToLive"></a>

```python
minimum_time_to_live: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsMinimumTimeToLiveOutputReference</a>

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions">DataAwsccIotfleetwiseCampaignDataPartitionsStorageOptions</a>

---


### DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference <a name="DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion">condition_language_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions">DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_language_version`<sup>Required</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.conditionLanguageVersion"></a>

```python
condition_language_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions">DataAwsccIotfleetwiseCampaignDataPartitionsUploadOptions</a>

---


### DataAwsccIotfleetwiseCampaignSignalsToCollectList <a name="DataAwsccIotfleetwiseCampaignSignalsToCollectList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference <a name="DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId">data_partition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount">max_sample_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs">minimum_sampling_interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollect">DataAwsccIotfleetwiseCampaignSignalsToCollect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_partition_id`<sup>Required</sup> <a name="data_partition_id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.dataPartitionId"></a>

```python
data_partition_id: str
```

- *Type:* str

---

##### `max_sample_count`<sup>Required</sup> <a name="max_sample_count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.maxSampleCount"></a>

```python
max_sample_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_sampling_interval_ms`<sup>Required</sup> <a name="minimum_sampling_interval_ms" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.minimumSamplingIntervalMs"></a>

```python
minimum_sampling_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollectOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignSignalsToCollect
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToCollect">DataAwsccIotfleetwiseCampaignSignalsToCollect</a>

---


### DataAwsccIotfleetwiseCampaignSignalsToFetchList <a name="DataAwsccIotfleetwiseCampaignSignalsToFetchList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference <a name="DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion">condition_language_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig">signal_fetch_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetch">DataAwsccIotfleetwiseCampaignSignalsToFetch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition_language_version`<sup>Required</sup> <a name="condition_language_version" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.conditionLanguageVersion"></a>

```python
condition_language_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `signal_fetch_config`<sup>Required</sup> <a name="signal_fetch_config" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.signalFetchConfig"></a>

```python
signal_fetch_config: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignSignalsToFetch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetch">DataAwsccIotfleetwiseCampaignSignalsToFetch</a>

---


### DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference <a name="DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression">condition_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode">trigger_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_expression`<sup>Required</sup> <a name="condition_expression" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.conditionExpression"></a>

```python
condition_expression: str
```

- *Type:* str

---

##### `trigger_mode`<sup>Required</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBased</a>

---


### DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference <a name="DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased">condition_based</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased">time_based</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_based`<sup>Required</sup> <a name="condition_based" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.conditionBased"></a>

```python
condition_based: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigConditionBasedOutputReference</a>

---

##### `time_based`<sup>Required</sup> <a name="time_based" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.timeBased"></a>

```python
time_based: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfig</a>

---


### DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference <a name="DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs">execution_frequency_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_frequency_ms`<sup>Required</sup> <a name="execution_frequency_ms" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.executionFrequencyMs"></a>

```python
execution_frequency_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBasedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased">DataAwsccIotfleetwiseCampaignSignalsToFetchSignalFetchConfigTimeBased</a>

---


### DataAwsccIotfleetwiseCampaignTagsList <a name="DataAwsccIotfleetwiseCampaignTagsList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotfleetwiseCampaignTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotfleetwiseCampaignTagsOutputReference <a name="DataAwsccIotfleetwiseCampaignTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotfleetwise_campaign

dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTags">DataAwsccIotfleetwiseCampaignTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotfleetwiseCampaignTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseCampaign.DataAwsccIotfleetwiseCampaignTags">DataAwsccIotfleetwiseCampaignTags</a>

---



