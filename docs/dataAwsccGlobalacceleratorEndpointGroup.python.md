# `dataAwsccGlobalacceleratorEndpointGroup` Submodule <a name="`dataAwsccGlobalacceleratorEndpointGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlobalacceleratorEndpointGroup <a name="DataAwsccGlobalacceleratorEndpointGroup" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_endpoint_group awscc_globalaccelerator_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_endpoint_group#id DataAwsccGlobalacceleratorEndpointGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGlobalacceleratorEndpointGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGlobalacceleratorEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlobalacceleratorEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointConfigurations">endpoint_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList">DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointGroupArn">endpoint_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointGroupRegion">endpoint_group_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds">health_check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckPort">health_check_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckProtocol">health_check_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.listenerArn">listener_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.portOverrides">port_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList">DataAwsccGlobalacceleratorEndpointGroupPortOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.thresholdCount">threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.trafficDialPercentage">traffic_dial_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `endpoint_configurations`<sup>Required</sup> <a name="endpoint_configurations" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointConfigurations"></a>

```python
endpoint_configurations: DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList">DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList</a>

---

##### `endpoint_group_arn`<sup>Required</sup> <a name="endpoint_group_arn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointGroupArn"></a>

```python
endpoint_group_arn: str
```

- *Type:* str

---

##### `endpoint_group_region`<sup>Required</sup> <a name="endpoint_group_region" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.endpointGroupRegion"></a>

```python
endpoint_group_region: str
```

- *Type:* str

---

##### `health_check_interval_seconds`<sup>Required</sup> <a name="health_check_interval_seconds" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds"></a>

```python
health_check_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `health_check_port`<sup>Required</sup> <a name="health_check_port" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckPort"></a>

```python
health_check_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_protocol`<sup>Required</sup> <a name="health_check_protocol" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.healthCheckProtocol"></a>

```python
health_check_protocol: str
```

- *Type:* str

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

---

##### `port_overrides`<sup>Required</sup> <a name="port_overrides" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.portOverrides"></a>

```python
port_overrides: DataAwsccGlobalacceleratorEndpointGroupPortOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList">DataAwsccGlobalacceleratorEndpointGroupPortOverridesList</a>

---

##### `threshold_count`<sup>Required</sup> <a name="threshold_count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.thresholdCount"></a>

```python
threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `traffic_dial_percentage`<sup>Required</sup> <a name="traffic_dial_percentage" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.trafficDialPercentage"></a>

```python
traffic_dial_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlobalacceleratorEndpointGroupConfig <a name="DataAwsccGlobalacceleratorEndpointGroupConfig" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_endpoint_group#id DataAwsccGlobalacceleratorEndpointGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations <a name="DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations()
```


### DataAwsccGlobalacceleratorEndpointGroupPortOverrides <a name="DataAwsccGlobalacceleratorEndpointGroupPortOverrides" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverrides()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList <a name="DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference <a name="DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArn">attachment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabled">client_ip_preservation_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations">DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_arn`<sup>Required</sup> <a name="attachment_arn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArn"></a>

```python
attachment_arn: str
```

- *Type:* str

---

##### `client_ip_preservation_enabled`<sup>Required</sup> <a name="client_ip_preservation_enabled" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabled"></a>

```python
client_ip_preservation_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations">DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations</a>

---


### DataAwsccGlobalacceleratorEndpointGroupPortOverridesList <a name="DataAwsccGlobalacceleratorEndpointGroupPortOverridesList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference <a name="DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_endpoint_group

dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPort">endpoint_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverrides">DataAwsccGlobalacceleratorEndpointGroupPortOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_port`<sup>Required</sup> <a name="endpoint_port" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPort"></a>

```python
endpoint_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlobalacceleratorEndpointGroupPortOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorEndpointGroup.DataAwsccGlobalacceleratorEndpointGroupPortOverrides">DataAwsccGlobalacceleratorEndpointGroupPortOverrides</a>

---



