# `dataAwsccNetworkfirewallContainerAssociation` Submodule <a name="`dataAwsccNetworkfirewallContainerAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallContainerAssociation <a name="DataAwsccNetworkfirewallContainerAssociation" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/networkfirewall_container_association awscc_networkfirewall_container_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/networkfirewall_container_association#id DataAwsccNetworkfirewallContainerAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNetworkfirewallContainerAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNetworkfirewallContainerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/networkfirewall_container_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallContainerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerAssociationArn">container_association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerAssociationName">container_association_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerMonitoringConfigurations">container_monitoring_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.resolvedCidrCount">resolved_cidr_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList">DataAwsccNetworkfirewallContainerAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `container_association_arn`<sup>Required</sup> <a name="container_association_arn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerAssociationArn"></a>

```python
container_association_arn: str
```

- *Type:* str

---

##### `container_association_name`<sup>Required</sup> <a name="container_association_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerAssociationName"></a>

```python
container_association_name: str
```

- *Type:* str

---

##### `container_monitoring_configurations`<sup>Required</sup> <a name="container_monitoring_configurations" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerMonitoringConfigurations"></a>

```python
container_monitoring_configurations: DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `resolved_cidr_count`<sup>Required</sup> <a name="resolved_cidr_count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.resolvedCidrCount"></a>

```python
resolved_cidr_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.tags"></a>

```python
tags: DataAwsccNetworkfirewallContainerAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList">DataAwsccNetworkfirewallContainerAssociationTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallContainerAssociationConfig <a name="DataAwsccNetworkfirewallContainerAssociationConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/networkfirewall_container_association#id DataAwsccNetworkfirewallContainerAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations()
```


### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters()
```


### DataAwsccNetworkfirewallContainerAssociationTags <a name="DataAwsccNetworkfirewallContainerAssociationTags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>

---


### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters">attribute_filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_filters`<sup>Required</sup> <a name="attribute_filters" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters"></a>

```python
attribute_filters: DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a>

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>

---


### DataAwsccNetworkfirewallContainerAssociationTagsList <a name="DataAwsccNetworkfirewallContainerAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallContainerAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallContainerAssociationTagsOutputReference <a name="DataAwsccNetworkfirewallContainerAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_container_association

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTags">DataAwsccNetworkfirewallContainerAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallContainerAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTags">DataAwsccNetworkfirewallContainerAssociationTags</a>

---



