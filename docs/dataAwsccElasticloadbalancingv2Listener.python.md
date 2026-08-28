# `dataAwsccElasticloadbalancingv2Listener` Submodule <a name="`dataAwsccElasticloadbalancingv2Listener` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticloadbalancingv2Listener <a name="DataAwsccElasticloadbalancingv2Listener" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticloadbalancingv2_listener#id DataAwsccElasticloadbalancingv2Listener#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccElasticloadbalancingv2Listener to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccElasticloadbalancingv2Listener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticloadbalancingv2_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticloadbalancingv2Listener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.alpnPolicy">alpn_policy</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList">DataAwsccElasticloadbalancingv2ListenerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.defaultActions">default_actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerArn">listener_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerAttributes">listener_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList">DataAwsccElasticloadbalancingv2ListenerListenerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.mutualAuthentication">mutual_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference">DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList">DataAwsccElasticloadbalancingv2ListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `alpn_policy`<sup>Required</sup> <a name="alpn_policy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.alpnPolicy"></a>

```python
alpn_policy: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.certificates"></a>

```python
certificates: DataAwsccElasticloadbalancingv2ListenerCertificatesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList">DataAwsccElasticloadbalancingv2ListenerCertificatesList</a>

---

##### `default_actions`<sup>Required</sup> <a name="default_actions" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.defaultActions"></a>

```python
default_actions: DataAwsccElasticloadbalancingv2ListenerDefaultActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsList</a>

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

---

##### `listener_attributes`<sup>Required</sup> <a name="listener_attributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerAttributes"></a>

```python
listener_attributes: DataAwsccElasticloadbalancingv2ListenerListenerAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList">DataAwsccElasticloadbalancingv2ListenerListenerAttributesList</a>

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

---

##### `mutual_authentication`<sup>Required</sup> <a name="mutual_authentication" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.mutualAuthentication"></a>

```python
mutual_authentication: DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference">DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `ssl_policy`<sup>Required</sup> <a name="ssl_policy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tags"></a>

```python
tags: DataAwsccElasticloadbalancingv2ListenerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList">DataAwsccElasticloadbalancingv2ListenerTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticloadbalancingv2ListenerCertificates <a name="DataAwsccElasticloadbalancingv2ListenerCertificates" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates()
```


### DataAwsccElasticloadbalancingv2ListenerConfig <a name="DataAwsccElasticloadbalancingv2ListenerConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticloadbalancingv2_listener#id DataAwsccElasticloadbalancingv2Listener#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticloadbalancingv2ListenerDefaultActions <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActions" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions()
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig()
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig()
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig()
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig()
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups()
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig()
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig()
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims()
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig()
```


### DataAwsccElasticloadbalancingv2ListenerListenerAttributes <a name="DataAwsccElasticloadbalancingv2ListenerListenerAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes()
```


### DataAwsccElasticloadbalancingv2ListenerMutualAuthentication <a name="DataAwsccElasticloadbalancingv2ListenerMutualAuthentication" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication()
```


### DataAwsccElasticloadbalancingv2ListenerTags <a name="DataAwsccElasticloadbalancingv2ListenerTags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticloadbalancingv2ListenerCertificatesList <a name="DataAwsccElasticloadbalancingv2ListenerCertificatesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates">DataAwsccElasticloadbalancingv2ListenerCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerCertificates
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates">DataAwsccElasticloadbalancingv2ListenerCertificates</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">user_pool_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: StringMap
```

- *Type:* cdktn.StringMap

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```python
session_timeout: str
```

- *Type:* str

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `user_pool_client_id`<sup>Required</sup> <a name="user_pool_client_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```python
user_pool_client_id: str
```

- *Type:* str

---

##### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">use_existing_client_secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: StringMap
```

- *Type:* cdktn.StringMap

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```python
session_timeout: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `use_existing_client_secret`<sup>Required</sup> <a name="use_existing_client_secret" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```python
use_existing_client_secret: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody">message_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `message_body`<sup>Required</sup> <a name="message_body" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups">target_groups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">target_group_stickiness_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_groups`<sup>Required</sup> <a name="target_groups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups"></a>

```python
target_groups: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a>

---

##### `target_group_stickiness_config`<sup>Required</sup> <a name="target_group_stickiness_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```python
target_group_stickiness_config: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims">additional_claims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint">jwks_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_claims`<sup>Required</sup> <a name="additional_claims" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```python
additional_claims: DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jwks_endpoint`<sup>Required</sup> <a name="jwks_endpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```python
jwks_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsList <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig">authenticate_cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig">authenticate_oidc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig">fixed_response_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig">forward_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig">jwt_validation_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig">redirect_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions">DataAwsccElasticloadbalancingv2ListenerDefaultActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authenticate_cognito_config`<sup>Required</sup> <a name="authenticate_cognito_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig"></a>

```python
authenticate_cognito_config: DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `authenticate_oidc_config`<sup>Required</sup> <a name="authenticate_oidc_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig"></a>

```python
authenticate_oidc_config: DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a>

---

##### `fixed_response_config`<sup>Required</sup> <a name="fixed_response_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig"></a>

```python
fixed_response_config: DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a>

---

##### `forward_config`<sup>Required</sup> <a name="forward_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig"></a>

```python
forward_config: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a>

---

##### `jwt_validation_config`<sup>Required</sup> <a name="jwt_validation_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig"></a>

```python
jwt_validation_config: DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a>

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect_config`<sup>Required</sup> <a name="redirect_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig"></a>

```python
redirect_config: DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a>

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerDefaultActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions">DataAwsccElasticloadbalancingv2ListenerDefaultActions</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerListenerAttributesList <a name="DataAwsccElasticloadbalancingv2ListenerListenerAttributesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes">DataAwsccElasticloadbalancingv2ListenerListenerAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerListenerAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes">DataAwsccElasticloadbalancingv2ListenerListenerAttributes</a>

---


### DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames">advertise_trust_store_ca_names</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry">ignore_client_certificate_expiry</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn">trust_store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication">DataAwsccElasticloadbalancingv2ListenerMutualAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advertise_trust_store_ca_names`<sup>Required</sup> <a name="advertise_trust_store_ca_names" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames"></a>

```python
advertise_trust_store_ca_names: str
```

- *Type:* str

---

##### `ignore_client_certificate_expiry`<sup>Required</sup> <a name="ignore_client_certificate_expiry" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry"></a>

```python
ignore_client_certificate_expiry: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `trust_store_arn`<sup>Required</sup> <a name="trust_store_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn"></a>

```python
trust_store_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerMutualAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication">DataAwsccElasticloadbalancingv2ListenerMutualAuthentication</a>

---


### DataAwsccElasticloadbalancingv2ListenerTagsList <a name="DataAwsccElasticloadbalancingv2ListenerTagsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerTagsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener

dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags">DataAwsccElasticloadbalancingv2ListenerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags">DataAwsccElasticloadbalancingv2ListenerTags</a>

---



