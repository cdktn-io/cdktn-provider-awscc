# `dataAwsccApigatewayv2RoutingRule` Submodule <a name="`dataAwsccApigatewayv2RoutingRule` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayv2RoutingRule <a name="DataAwsccApigatewayv2RoutingRule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/apigatewayv2_routing_rule awscc_apigatewayv2_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/apigatewayv2_routing_rule#id DataAwsccApigatewayv2RoutingRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApigatewayv2RoutingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApigatewayv2RoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayv2RoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList">DataAwsccApigatewayv2RoutingRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList">DataAwsccApigatewayv2RoutingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.domainNameArn">domain_name_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.routingRuleArn">routing_rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.routingRuleId">routing_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.actions"></a>

```python
actions: DataAwsccApigatewayv2RoutingRuleActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList">DataAwsccApigatewayv2RoutingRuleActionsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.conditions"></a>

```python
conditions: DataAwsccApigatewayv2RoutingRuleConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList">DataAwsccApigatewayv2RoutingRuleConditionsList</a>

---

##### `domain_name_arn`<sup>Required</sup> <a name="domain_name_arn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.domainNameArn"></a>

```python
domain_name_arn: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `routing_rule_arn`<sup>Required</sup> <a name="routing_rule_arn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.routingRuleArn"></a>

```python
routing_rule_arn: str
```

- *Type:* str

---

##### `routing_rule_id`<sup>Required</sup> <a name="routing_rule_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.routingRuleId"></a>

```python
routing_rule_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayv2RoutingRuleActions <a name="DataAwsccApigatewayv2RoutingRuleActions" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActions()
```


### DataAwsccApigatewayv2RoutingRuleActionsInvokeApi <a name="DataAwsccApigatewayv2RoutingRuleActionsInvokeApi" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApi.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApi()
```


### DataAwsccApigatewayv2RoutingRuleConditions <a name="DataAwsccApigatewayv2RoutingRuleConditions" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditions()
```


### DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths()
```


### DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders()
```


### DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf()
```


### DataAwsccApigatewayv2RoutingRuleConfig <a name="DataAwsccApigatewayv2RoutingRuleConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/apigatewayv2_routing_rule#id DataAwsccApigatewayv2RoutingRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference <a name="DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePath">strip_base_path</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApi">DataAwsccApigatewayv2RoutingRuleActionsInvokeApi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `strip_base_path`<sup>Required</sup> <a name="strip_base_path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePath"></a>

```python
strip_base_path: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2RoutingRuleActionsInvokeApi
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApi">DataAwsccApigatewayv2RoutingRuleActionsInvokeApi</a>

---


### DataAwsccApigatewayv2RoutingRuleActionsList <a name="DataAwsccApigatewayv2RoutingRuleActionsList" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApigatewayv2RoutingRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApigatewayv2RoutingRuleActionsOutputReference <a name="DataAwsccApigatewayv2RoutingRuleActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.invokeApi">invoke_api</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference">DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActions">DataAwsccApigatewayv2RoutingRuleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoke_api`<sup>Required</sup> <a name="invoke_api" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.invokeApi"></a>

```python
invoke_api: DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference">DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2RoutingRuleActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActions">DataAwsccApigatewayv2RoutingRuleActions</a>

---


### DataAwsccApigatewayv2RoutingRuleConditionsList <a name="DataAwsccApigatewayv2RoutingRuleConditionsList" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApigatewayv2RoutingRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOf">any_of</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths">DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOf"></a>

```python
any_of: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths">DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths</a>

---


### DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlob">value_glob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `value_glob`<sup>Required</sup> <a name="value_glob" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlob"></a>

```python
value_glob: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>

---


### DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOf">any_of</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOf"></a>

```python
any_of: DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders</a>

---


### DataAwsccApigatewayv2RoutingRuleConditionsOutputReference <a name="DataAwsccApigatewayv2RoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigatewayv2_routing_rule

dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePaths">match_base_paths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference">DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.matchHeaders">match_headers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditions">DataAwsccApigatewayv2RoutingRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_base_paths`<sup>Required</sup> <a name="match_base_paths" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePaths"></a>

```python
match_base_paths: DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference">DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference</a>

---

##### `match_headers`<sup>Required</sup> <a name="match_headers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.matchHeaders"></a>

```python
match_headers: DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayv2RoutingRuleConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditions">DataAwsccApigatewayv2RoutingRuleConditions</a>

---



