# `dataAwsccRtbfabricResponderGateway` Submodule <a name="`dataAwsccRtbfabricResponderGateway` Submodule" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRtbfabricResponderGateway <a name="DataAwsccRtbfabricResponderGateway" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rtbfabric_responder_gateway#id DataAwsccRtbfabricResponderGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRtbfabricResponderGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRtbfabricResponderGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRtbfabricResponderGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRtbfabricResponderGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rtbfabric_responder_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRtbfabricResponderGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.acmCertificateArn">acm_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.certificateAssociationStatus">certificate_association_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.externalInboundEndpoint">external_inbound_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayType">gateway_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.listenerConfig">listener_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference">DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.managedEndpointConfiguration">managed_endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.responderGatewayStatus">responder_gateway_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList">DataAwsccRtbfabricResponderGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.trustStoreConfiguration">trust_store_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `acm_certificate_arn`<sup>Required</sup> <a name="acm_certificate_arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.acmCertificateArn"></a>

```python
acm_certificate_arn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate_association_status`<sup>Required</sup> <a name="certificate_association_status" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.certificateAssociationStatus"></a>

```python
certificate_association_status: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `external_inbound_endpoint`<sup>Required</sup> <a name="external_inbound_endpoint" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.externalInboundEndpoint"></a>

```python
external_inbound_endpoint: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `gateway_type`<sup>Required</sup> <a name="gateway_type" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.gatewayType"></a>

```python
gateway_type: str
```

- *Type:* str

---

##### `listener_config`<sup>Required</sup> <a name="listener_config" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.listenerConfig"></a>

```python
listener_config: DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference">DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference</a>

---

##### `managed_endpoint_configuration`<sup>Required</sup> <a name="managed_endpoint_configuration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.managedEndpointConfiguration"></a>

```python
managed_endpoint_configuration: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `responder_gateway_status`<sup>Required</sup> <a name="responder_gateway_status" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.responderGatewayStatus"></a>

```python
responder_gateway_status: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tags"></a>

```python
tags: DataAwsccRtbfabricResponderGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList">DataAwsccRtbfabricResponderGatewayTagsList</a>

---

##### `trust_store_configuration`<sup>Required</sup> <a name="trust_store_configuration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.trustStoreConfiguration"></a>

```python
trust_store_configuration: DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a>

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRtbfabricResponderGatewayConfig <a name="DataAwsccRtbfabricResponderGatewayConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rtbfabric_responder_gateway#id DataAwsccRtbfabricResponderGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRtbfabricResponderGatewayListenerConfig <a name="DataAwsccRtbfabricResponderGatewayListenerConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig()
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration()
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration()
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig()
```


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration()
```


### DataAwsccRtbfabricResponderGatewayTags <a name="DataAwsccRtbfabricResponderGatewayTags" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags()
```


### DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration <a name="DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference <a name="DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig">DataAwsccRtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricResponderGatewayListenerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayListenerConfig">DataAwsccRtbfabricResponderGatewayListenerConfig</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount">healthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher">status_code_matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs">timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount">unhealthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `healthy_threshold_count`<sup>Required</sup> <a name="healthy_threshold_count" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount"></a>

```python
healthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `status_code_matcher`<sup>Required</sup> <a name="status_code_matcher" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher"></a>

```python
status_code_matcher: str
```

- *Type:* str

---

##### `timeout_ms`<sup>Required</sup> <a name="timeout_ms" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs"></a>

```python
timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold_count`<sup>Required</sup> <a name="unhealthy_threshold_count" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount"></a>

```python
unhealthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList">auto_scaling_group_name_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_group_name_list`<sup>Required</sup> <a name="auto_scaling_group_name_list" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList"></a>

```python
auto_scaling_group_name_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig"></a>

```python
health_check_config: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain">cluster_api_server_ca_certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri">cluster_api_server_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName">endpoints_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace">endpoints_resource_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_api_server_ca_certificate_chain`<sup>Required</sup> <a name="cluster_api_server_ca_certificate_chain" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain"></a>

```python
cluster_api_server_ca_certificate_chain: str
```

- *Type:* str

---

##### `cluster_api_server_endpoint_uri`<sup>Required</sup> <a name="cluster_api_server_endpoint_uri" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri"></a>

```python
cluster_api_server_endpoint_uri: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `endpoints_resource_name`<sup>Required</sup> <a name="endpoints_resource_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName"></a>

```python
endpoints_resource_name: str
```

- *Type:* str

---

##### `endpoints_resource_namespace`<sup>Required</sup> <a name="endpoints_resource_namespace" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace"></a>

```python
endpoints_resource_namespace: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---


### DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration">auto_scaling_groups_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration">eks_endpoints_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_groups_configuration`<sup>Required</sup> <a name="auto_scaling_groups_configuration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration"></a>

```python
auto_scaling_groups_configuration: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a>

---

##### `eks_endpoints_configuration`<sup>Required</sup> <a name="eks_endpoints_configuration" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration"></a>

```python
eks_endpoints_configuration: DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration">DataAwsccRtbfabricResponderGatewayManagedEndpointConfiguration</a>

---


### DataAwsccRtbfabricResponderGatewayTagsList <a name="DataAwsccRtbfabricResponderGatewayTagsList" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRtbfabricResponderGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRtbfabricResponderGatewayTagsOutputReference <a name="DataAwsccRtbfabricResponderGatewayTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags">DataAwsccRtbfabricResponderGatewayTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricResponderGatewayTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTags">DataAwsccRtbfabricResponderGatewayTags</a>

---


### DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference <a name="DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_responder_gateway

dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates">certificate_authority_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration">DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_certificates`<sup>Required</sup> <a name="certificate_authority_certificates" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates"></a>

```python
certificate_authority_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricResponderGateway.DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration">DataAwsccRtbfabricResponderGatewayTrustStoreConfiguration</a>

---



